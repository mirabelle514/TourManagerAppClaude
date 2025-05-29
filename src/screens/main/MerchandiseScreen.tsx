import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Alert,
    Modal,
    FlatList,
    Image,
    Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import { CommonStyles, FormStyles } from '../../styles';
import { Colors } from '../../styles/theme/color';

const { width: screenWidth } = Dimensions.get('window');

// Types
interface MerchandiseItem {
    id: string;
    name: string;
    category: 'tshirt' | 'vinyl' | 'cd' | 'poster' | 'hoodie' | 'other';
    price: number;
    cost: number;
    currentStock: number;
    lowStockThreshold: number;
    totalSold: number;
    sizes?: string[];
    colors?: string[];
    image?: string;
    description?: string;
}

interface Sale {
    id: string;
    date: string;
    venue: string;
    itemId: string;
    itemName: string;
    quantity: number;
    size?: string;
    color?: string;
    price: number;
    total: number;
    soldBy: string;
}

interface VenueSales {
    venue: string;
    date: string;
    totalSales: number;
    totalItems: number;
    topItems: { name: string; quantity: number; revenue: number }[];
    attendance: number;
    conversionRate: number;
}

interface InventoryAdjustment {
    id: string;
    date: string;
    itemId: string;
    itemName: string;
    adjustment: number;
    reason: string;
    adjustedBy: string;
}

// Component: Inventory Card
const InventoryCard: React.FC<{ item: MerchandiseItem; onPress: () => void }> = ({
    item,
    onPress
}) => (
    <TouchableOpacity style={CommonStyles.inventoryCard} onPress={onPress}>
        <View style={CommonStyles.inventoryHeader}>
            <View style={CommonStyles.inventoryInfo}>
                <View style={[CommonStyles.categoryIcon, { backgroundColor: getCategoryColor(item.category) }]}>
                    <Ionicons name={getCategoryIcon(item.category) as any} size={20} color="#fff" />
                </View>
                <View style={CommonStyles.inventoryDetails}>
                    <Text style={CommonStyles.inventoryName}>{item.name}</Text>
                    <Text style={CommonStyles.inventoryCategory}>
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </Text>
                    {item.sizes && (
                        <Text style={CommonStyles.inventorySizes}>Sizes: {item.sizes.join(', ')}</Text>
                    )}
                </View>
            </View>
            <View style={CommonStyles.inventoryStats}>
                <Text style={CommonStyles.inventoryPrice}>${item.price}</Text>
                <Text style={[
                    CommonStyles.inventoryStock,
                    { color: item.currentStock <= item.lowStockThreshold ? '#e74c3c' : '#27ae60' }
                ]}>
                    {item.currentStock} left
                </Text>
            </View>
        </View>

        {item.currentStock <= item.lowStockThreshold && (
            <View style={CommonStyles.lowStockBanner}>
                <Ionicons name="warning" size={16} color="#e74c3c" />
                <Text style={CommonStyles.lowStockText}>
                    Low Stock - Reorder {item.lowStockThreshold - item.currentStock + 20} units
                </Text>
            </View>
        )}

        <View style={CommonStyles.inventoryMetrics}>
            <View style={CommonStyles.metric}>
                <Text style={CommonStyles.metricLabel}>Sold</Text>
                <Text style={CommonStyles.metricValue}>{item.totalSold}</Text>
            </View>
            <View style={CommonStyles.metric}>
                <Text style={CommonStyles.metricLabel}>Revenue</Text>
                <Text style={CommonStyles.metricValue}>${(item.price * item.totalSold).toLocaleString()}</Text>
            </View>
            <View style={CommonStyles.metric}>
                <Text style={CommonStyles.metricLabel}>Profit</Text>
                <Text style={[CommonStyles.metricValue, { color: '#2ecc71' }]}>
                    ${((item.price - item.cost) * item.totalSold).toLocaleString()}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
);

// Component: Sales Tracker
const SalesTracker: React.FC<{ sales: Sale[] }> = ({ sales }) => {
    const dailySales = sales.reduce((acc, sale) => {
        const date = sale.date;
        if (!acc[date]) {
            acc[date] = { total: 0, items: 0 };
        }
        acc[date].total += sale.total;
        acc[date].items += sale.quantity;
        return acc;
    }, {} as Record<string, { total: number; items: number }>);

    const chartData = {
        labels: Object.keys(dailySales).slice(-7),
        datasets: [{
            data: Object.values(dailySales).slice(-7).map(day => day.total),
            color: (opacity = 1) => `rgba(52, 152, 219, ${opacity})`,
            strokeWidth: 2,
        }]
    };

    return (
        <View style={CommonStyles.salesTrackerCard}>
            <Text style={CommonStyles.salesTrackerTitle}>Sales Trend (Last 7 Days)</Text>
            <LineChart
                data={chartData}
                width={screenWidth - 60}
                height={180}
                chartConfig={{
                    backgroundColor: '#ffffff',
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#ffffff',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(52, 152, 219, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(102, 102, 102, ${opacity})`,
                    style: { borderRadius: 16 },
                    propsForDots: {
                        r: '4',
                        strokeWidth: '2',
                        stroke: '#3498db'
                    }
                }}
                bezier
                style={CommonStyles.chart}
            />
        </View>
    );
};

// Component: Reorder Alert
const ReorderAlert: React.FC<{ items: MerchandiseItem[] }> = ({ items }) => {
    if (items.length === 0) return null;

    return (
        <View style={CommonStyles.reorderAlertCard}>
            <View style={CommonStyles.reorderHeader}>
                <Ionicons name="warning" size={24} color="#e74c3c" />
                <Text style={CommonStyles.reorderTitle}>Low Stock Alert</Text>
            </View>
            <Text style={CommonStyles.reorderDescription}>
                {items.length} item{items.length > 1 ? 's' : ''} need restocking
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={CommonStyles.reorderList}>
                {items.map((item) => (
                    <View key={item.id} style={CommonStyles.reorderItem}>
                        <Text style={CommonStyles.reorderItemName}>{item.name}</Text>
                        <Text style={CommonStyles.reorderItemStock}>{item.currentStock} left</Text>
                        <Text style={CommonStyles.reorderSuggestion}>
                            Order {item.lowStockThreshold - item.currentStock + 20}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

// Component: Venue Performance
const VenuePerformance: React.FC<{ venueData: VenueSales }> = ({ venueData }) => (
    <View style={CommonStyles.venuePerformanceCard}>
        <View style={CommonStyles.venueHeader}>
            <Text style={CommonStyles.venueName}>{venueData.venue}</Text>
            <Text style={CommonStyles.venueDate}>{venueData.date}</Text>
        </View>

        <View style={CommonStyles.venueStats}>
            <View style={CommonStyles.venueStat}>
                <Text style={CommonStyles.venueStatValue}>${venueData.totalSales.toLocaleString()}</Text>
                <Text style={CommonStyles.venueStatLabel}>Total Sales</Text>
            </View>
            <View style={CommonStyles.venueStat}>
                <Text style={CommonStyles.venueStatValue}>{venueData.totalItems}</Text>
                <Text style={CommonStyles.venueStatLabel}>Items Sold</Text>
            </View>
            <View style={CommonStyles.venueStat}>
                <Text style={CommonStyles.venueStatValue}>{(venueData.conversionRate * 100).toFixed(1)}%</Text>
                <Text style={CommonStyles.venueStatLabel}>Conversion Rate</Text>
            </View>
        </View>

        <Text style={CommonStyles.topItemsTitle}>Top Sellers</Text>
        {venueData.topItems.map((item, index) => (
            <View key={index} style={CommonStyles.topItem}>
                <Text style={CommonStyles.topItemName}>{item.name}</Text>
                <View style={CommonStyles.topItemStats}>
                    <Text style={CommonStyles.topItemQuantity}>{item.quantity} sold</Text>
                    <Text style={CommonStyles.topItemRevenue}>${item.revenue}</Text>
                </View>
            </View>
        ))}
    </View>
);

// Helper functions
const getCategoryIcon = (category: string) => {
    switch (category) {
        case 'tshirt': return 'shirt-outline';
        case 'hoodie': return 'shirt';
        case 'vinyl': return 'disc-outline';
        case 'cd': return 'disc';
        case 'poster': return 'image-outline';
        default: return 'pricetag-outline';
    }
};

const getCategoryColor = (category: string) => {
    switch (category) {
        case 'tshirt': return Colors.primary;
        case 'hoodie': return Colors.secondary;
        case 'vinyl': return Colors.secondary;
        case 'cd': return Colors.tertiary;
        case 'poster': return Colors.quaternary;
        default: return Colors.quinary;
    }
};

const MerchandiseScreen: React.FC = () => {
    const [merchandiseItems, setMerchandiseItems] = useState<MerchandiseItem[]>([]);
    const [recentSales, setRecentSales] = useState<Sale[]>([]);
    const [venueSales, setVenueSales] = useState<VenueSales[]>([]);
    const [inventoryAdjustments, setInventoryAdjustments] = useState<InventoryAdjustment[]>([]);
    const [showAddSale, setShowAddSale] = useState(false);
    const [showInventoryAdjust, setShowInventoryAdjust] = useState(false);
    const [showItemDetail, setShowItemDetail] = useState(false);
    const [selectedItem, setSelectedItem] = useState<MerchandiseItem | null>(null);
    const [activeTab, setActiveTab] = useState<'inventory' | 'sales' | 'analytics'>('inventory');
    const [refreshing, setRefreshing] = useState(false);

    const [newSale, setNewSale] = useState({
        itemId: '',
        quantity: '1',
        size: '',
        color: '',
        customPrice: '',
    });

    const [inventoryAdjustment, setInventoryAdjustment] = useState({
        itemId: '',
        adjustment: '',
        reason: '',
    });

    useEffect(() => {
        loadMerchandiseData();
    }, []);

    const loadMerchandiseData = async () => {
        try {
            // Mock data - in real app, this would be API calls
            const mockItems: MerchandiseItem[] = [
                {
                    id: '1',
                    name: 'Tour T-Shirt 2024',
                    category: 'tshirt',
                    price: 25,
                    cost: 8,
                    currentStock: 47,
                    lowStockThreshold: 20,
                    totalSold: 153,
                    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                    colors: ['Black', 'White', 'Navy'],
                    description: 'Official tour merchandise with exclusive 2024 tour dates',
                },
                {
                    id: '2',
                    name: 'Latest Album Vinyl',
                    category: 'vinyl',
                    price: 35,
                    cost: 12,
                    currentStock: 23,
                    lowStockThreshold: 15,
                    totalSold: 87,
                    description: 'Limited edition colored vinyl with exclusive artwork',
                },
                {
                    id: '3',
                    name: 'Band Logo Hoodie',
                    category: 'hoodie',
                    price: 45,
                    cost: 18,
                    currentStock: 12,
                    lowStockThreshold: 15,
                    totalSold: 64,
                    sizes: ['S', 'M', 'L', 'XL'],
                    colors: ['Black', 'Charcoal'],
                    description: 'Premium quality hoodie with embroidered logo',
                },
                {
                    id: '4',
                    name: 'Concert Poster',
                    category: 'poster',
                    price: 15,
                    cost: 3,
                    currentStock: 89,
                    lowStockThreshold: 25,
                    totalSold: 234,
                    description: 'Collectible poster featuring tour artwork',
                },
                {
                    id: '5',
                    name: 'Greatest Hits CD',
                    category: 'cd',
                    price: 20,
                    cost: 5,
                    currentStock: 8,
                    lowStockThreshold: 20,
                    totalSold: 145,
                    description: 'Complete collection with bonus tracks',
                },
            ];

            const mockSales: Sale[] = [
                {
                    id: '1',
                    date: '2024-01-15',
                    venue: 'The Fillmore',
                    itemId: '1',
                    itemName: 'Tour T-Shirt 2024',
                    quantity: 3,
                    size: 'L',
                    color: 'Black',
                    price: 25,
                    total: 75,
                    soldBy: 'David Kim',
                },
                {
                    id: '2',
                    date: '2024-01-15',
                    venue: 'The Fillmore',
                    itemId: '2',
                    itemName: 'Latest Album Vinyl',
                    quantity: 2,
                    price: 35,
                    total: 70,
                    soldBy: 'David Kim',
                },
                {
                    id: '3',
                    date: '2024-01-14',
                    venue: 'Bottom Lounge',
                    itemId: '4',
                    itemName: 'Concert Poster',
                    quantity: 8,
                    price: 15,
                    total: 120,
                    soldBy: 'David Kim',
                },
                {
                    id: '4',
                    date: '2024-01-14',
                    venue: 'Bottom Lounge',
                    itemId: '1',
                    itemName: 'Tour T-Shirt 2024',
                    quantity: 5,
                    size: 'M',
                    color: 'White',
                    price: 25,
                    total: 125,
                    soldBy: 'David Kim',
                },
                {
                    id: '5',
                    date: '2024-01-13',
                    venue: 'House of Blues',
                    itemId: '3',
                    itemName: 'Band Logo Hoodie',
                    quantity: 3,
                    size: 'L',
                    color: 'Black',
                    price: 45,
                    total: 135,
                    soldBy: 'David Kim',
                },
            ];

            const mockVenueSales: VenueSales[] = [
                {
                    venue: 'The Fillmore',
                    date: '2024-01-15',
                    totalSales: 485,
                    totalItems: 23,
                    attendance: 1050,
                    conversionRate: 0.22,
                    topItems: [
                        { name: 'Tour T-Shirt 2024', quantity: 8, revenue: 200 },
                        { name: 'Latest Album Vinyl', quantity: 6, revenue: 210 },
                        { name: 'Concert Poster', quantity: 9, revenue: 135 },
                    ],
                },
                {
                    venue: 'Bottom Lounge',
                    date: '2024-01-14',
                    totalSales: 420,
                    totalItems: 18,
                    attendance: 850,
                    conversionRate: 0.21,
                    topItems: [
                        { name: 'Concert Poster', quantity: 8, revenue: 120 },
                        { name: 'Tour T-Shirt 2024', quantity: 5, revenue: 125 },
                        { name: 'Band Logo Hoodie', quantity: 5, revenue: 225 },
                    ],
                },
                {
                    venue: 'House of Blues',
                    date: '2024-01-13',
                    totalSales: 380,
                    totalItems: 15,
                    attendance: 900,
                    conversionRate: 0.17,
                    topItems: [
                        { name: 'Band Logo Hoodie', quantity: 3, revenue: 135 },
                        { name: 'Tour T-Shirt 2024', quantity: 6, revenue: 150 },
                        { name: 'Greatest Hits CD', quantity: 4, revenue: 80 },
                    ],
                },
            ];

            const mockAdjustments: InventoryAdjustment[] = [
                {
                    id: '1',
                    date: '2024-01-12',
                    itemId: '1',
                    itemName: 'Tour T-Shirt 2024',
                    adjustment: -2,
                    reason: 'Damaged during transport',
                    adjustedBy: 'Tour Manager',
                },
                {
                    id: '2',
                    date: '2024-01-10',
                    itemId: '2',
                    itemName: 'Latest Album Vinyl',
                    adjustment: 50,
                    reason: 'New shipment received',
                    adjustedBy: 'Tour Manager',
                },
            ];

            setMerchandiseItems(mockItems);
            setRecentSales(mockSales);
            setVenueSales(mockVenueSales);
            setInventoryAdjustments(mockAdjustments);
        } catch (error) {
            Alert.alert('Error', 'Failed to load merchandise data');
        }
    };

    const getTotalStats = () => {
        const totalValue = merchandiseItems.reduce(
            (sum, item) => sum + item.currentStock * item.price,
            0
        );
        const totalSalesValue = recentSales.reduce((sum, sale) => sum + sale.total, 0);
        const totalCost = merchandiseItems.reduce(
            (sum, item) => sum + item.currentStock * item.cost,
            0
        );
        const totalProfit = recentSales.reduce(
            (sum, sale) => {
                const item = merchandiseItems.find(i => i.id === sale.itemId);
                return sum + (sale.price - (item?.cost || 0)) * sale.quantity;
            },
            0
        );
        const lowStockItems = merchandiseItems.filter(
            item => item.currentStock <= item.lowStockThreshold
        ).length;

        return { totalValue, totalSalesValue, totalCost, totalProfit, lowStockItems };
    };

    const handleAddSale = () => {
        if (!newSale.itemId || !newSale.quantity) {
            Alert.alert('Error', 'Please select an item and quantity');
            return;
        }

        const item = merchandiseItems.find(i => i.id === newSale.itemId);
        if (!item) return;

        const quantity = parseInt(newSale.quantity);
        const price = newSale.customPrice ? parseFloat(newSale.customPrice) : item.price;

        if (quantity > item.currentStock) {
            Alert.alert('Error', `Not enough stock. Only ${item.currentStock} available.`);
            return;
        }

        const sale: Sale = {
            id: Date.now().toString(),
            date: new Date().toISOString().split('T')[0],
            venue: 'Current Venue',
            itemId: item.id,
            itemName: item.name,
            quantity,
            size: newSale.size || undefined,
            color: newSale.color || undefined,
            price,
            total: quantity * price,
            soldBy: 'Current User',
        };

        // Update inventory
        const updatedItems = merchandiseItems.map(i => {
            if (i.id === item.id) {
                return {
                    ...i,
                    currentStock: i.currentStock - quantity,
                    totalSold: i.totalSold + quantity,
                };
            }
            return i;
        });

        setMerchandiseItems(updatedItems);
        setRecentSales([sale, ...recentSales]);
        setNewSale({ itemId: '', quantity: '1', size: '', color: '', customPrice: '' });
        setShowAddSale(false);
        Alert.alert('Success', `Sale recorded: ${quantity}x ${item.name}`);
    };

    const handleInventoryAdjustment = () => {
        if (!inventoryAdjustment.itemId || !inventoryAdjustment.adjustment) {
            Alert.alert('Error', 'Please select an item and adjustment amount');
            return;
        }

        const item = merchandiseItems.find(i => i.id === inventoryAdjustment.itemId);
        if (!item) return;

        const adjustment = parseInt(inventoryAdjustment.adjustment);
        const newStock = Math.max(0, item.currentStock + adjustment);

        const updatedItems = merchandiseItems.map(i => {
            if (i.id === inventoryAdjustment.itemId) {
                return { ...i, currentStock: newStock };
            }
            return i;
        });

        const adjustmentRecord: InventoryAdjustment = {
            id: Date.now().toString(),
            date: new Date().toISOString().split('T')[0],
            itemId: item.id,
            itemName: item.name,
            adjustment,
            reason: inventoryAdjustment.reason,
            adjustedBy: 'Current User',
        };

        setMerchandiseItems(updatedItems);
        setInventoryAdjustments([adjustmentRecord, ...inventoryAdjustments]);
        setInventoryAdjustment({ itemId: '', adjustment: '', reason: '' });
        setShowInventoryAdjust(false);
        Alert.alert('Success', 'Inventory updated successfully');
    };

    const getLowStockItems = () => {
        return merchandiseItems.filter(item => item.currentStock <= item.lowStockThreshold);
    };

    const renderInventoryItem = ({ item }: { item: MerchandiseItem }) => (
        <InventoryCard
            item={item}
            onPress={() => {
                setSelectedItem(item);
                setShowItemDetail(true);
            }}
        />
    );

    const renderSaleItem = ({ item }: { item: Sale }) => (
        <View style={styles.saleItem}>
            <View style={styles.saleHeader}>
                <Text style={styles.saleItemName}>{item.itemName}</Text>
                <Text style={styles.saleTotal}>${item.total}</Text>
            </View>
            <View style={styles.saleDetails}>
                <Text style={styles.saleInfo}>
                    {item.quantity}x @ ${item.price}
                    {item.size ? ` (${item.size})` : ''}
                    {item.color ? ` - ${item.color}` : ''}
                </Text>
                <Text style={styles.saleVenue}>{item.venue} • {item.date}</Text>
            </View>
            <Text style={styles.saleSoldBy}>Sold by: {item.soldBy}</Text>
        </View>
    );

    const renderCategoryChart = () => {
        const categoryData = merchandiseItems.reduce((acc, item) => {
            const category = item.category;
            if (!acc[category]) {
                acc[category] = { revenue: 0, quantity: 0 };
            }
            acc[category].revenue += item.price * item.totalSold;
            acc[category].quantity += item.totalSold;
            return acc;
        }, {} as Record<string, { revenue: number; quantity: number }>);

        const pieData = Object.entries(categoryData).map(([category, data], index) => ({
            name: category.charAt(0).toUpperCase() + category.slice(1),
            population: data.revenue,
            color: getCategoryColor(category),
            legendFontColor: '#333',
            legendFontSize: 12,
        }));

        if (pieData.length === 0) return null;

        return (
            <View style={styles.chartCard}>
                <Text style={styles.chartTitle}>Revenue by Category</Text>
                <PieChart
                    data={pieData}
                    width={screenWidth - 60}
                    height={200}
                    chartConfig={{
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    }}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                />
            </View>
        );
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await loadMerchandiseData();
        setRefreshing(false);
    };

    const stats = getTotalStats();
    const lowStockItems = getLowStockItems();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Merchandise</Text>
                <View style={styles.headerActions}>
                    <TouchableOpacity
                        style={styles.headerButton}
                        onPress={() => setShowInventoryAdjust(true)}
                    >
                        <MaterialIcons name="inventory" size={20} color="#3498db" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.headerButton}
                        onPress={() => setShowAddSale(true)}
                    >
                        <Ionicons name="add" size={24} color="#3498db" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Stats Overview */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.statsRow}>
                <View style={[styles.statCard, { backgroundColor: '#3498db' }]}>
                    <MaterialIcons name="inventory-2" size={24} color="#fff" />
                    <Text style={styles.statAmount}>${stats.totalValue.toLocaleString()}</Text>
                    <Text style={styles.statLabel}>Inventory Value</Text>
                </View>
                <View style={[styles.statCard, { backgroundColor: '#2ecc71' }]}>
                    <Ionicons name="trending-up" size={24} color="#fff" />
                    <Text style={styles.statAmount}>${stats.totalSalesValue.toLocaleString()}</Text>
                    <Text style={styles.statLabel}>Total Sales</Text>
                </View>
                <View style={[styles.statCard, { backgroundColor: '#f39c12' }]}>
                    <MaterialIcons name="attach-money" size={24} color="#fff" />
                    <Text style={styles.statAmount}>${stats.totalProfit.toLocaleString()}</Text>
                    <Text style={styles.statLabel}>Total Profit</Text>
                </View>
                <View style={[styles.statCard, { backgroundColor: '#e74c3c' }]}>
                    <Ionicons name="warning" size={24} color="#fff" />
                    <Text style={styles.statAmount}>{stats.lowStockItems}</Text>
                    <Text style={styles.statLabel}>Low Stock</Text>
                </View>
            </ScrollView>

            {/* Tab Navigation */}
            <View style={styles.tabContainer}>
                {[
                    { key: 'inventory', label: 'Inventory', icon: 'cube-outline' },
                    { key: 'sales', label: 'Sales', icon: 'receipt-outline' },
                    { key: 'analytics', label: 'Analytics', icon: 'analytics-outline' },
                ].map((tab) => (
                    <TouchableOpacity
                        key={tab.key}
                        style={[styles.tab, activeTab === tab.key && styles.activeTab]}
                        onPress={() => setActiveTab(tab.key as any)}
                    >
                        <Ionicons
                            name={tab.icon as any}
                            size={20}
                            color={activeTab === tab.key ? '#3498db' : '#666'}
                        />
                        <Text style={[
                            styles.tabLabel,
                            { color: activeTab === tab.key ? '#3498db' : '#666' }
                        ]}>
                            {tab.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Tab Content */}
            <ScrollView
                style={styles.tabContent}
                refreshControl={
                    <ScrollView
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {activeTab === 'inventory' && (
                    <>
                        {lowStockItems.length > 0 && (
                            <ReorderAlert items={lowStockItems} />
                        )}
                        <FlatList
                            data={merchandiseItems}
                            renderItem={renderInventoryItem}
                            keyExtractor={(item) => item.id}
                            scrollEnabled={false}
                        />
                    </>
                )}

                {activeTab === 'sales' && (
                    <View style={styles.salesContent}>
                        <SalesTracker sales={recentSales} />
                        <Text style={styles.sectionTitle}>Recent Sales</Text>
                        <FlatList
                            data={recentSales}
                            renderItem={renderSaleItem}
                            keyExtractor={(item) => item.id}
                            scrollEnabled={false}
                        />
                    </View>
                )}

                {activeTab === 'analytics' && (
                    <View style={styles.analyticsContent}>
                        {renderCategoryChart()}
                        <Text style={styles.sectionTitle}>Venue Performance</Text>
                        {venueSales.map((venue, index) => (
                            <VenuePerformance key={index} venueData={venue} />
                        ))}
                    </View>
                )}
            </ScrollView>

            {/* Add Sale Modal */}
            <Modal
                visible={showAddSale}
                animationType="slide"
                presentationStyle="pageSheet"
            >
                <SafeAreaView style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <TouchableOpacity onPress={() => setShowAddSale(false)}>
                            <Ionicons name="close" size={24} color="#666" />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>Record Sale</Text>
                        <TouchableOpacity onPress={handleAddSale}>
                            <Text style={styles.saveButton}>Save</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={styles.modalContent}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Item *</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {merchandiseItems.map((item) => (
                                    <TouchableOpacity
                                        key={item.id}
                                        style={[
                                            styles.itemSelector,
                                            newSale.itemId === item.id && styles.selectedItemSelector
                                        ]}
                                        onPress={() => setNewSale({ ...newSale, itemId: item.id })}
                                    >
                                        <View style={[styles.itemSelectorIcon, { backgroundColor: getCategoryColor(item.category) }]}>
                                            <Ionicons
                                                name={getCategoryIcon(item.category) as any}
                                                size={16}
                                                color="#fff"
                                            />
                                        </View>
                                        <Text style={[
                                            styles.itemSelectorText,
                                            { color: newSale.itemId === item.id ? '#fff' : '#333' }
                                        ]}>
                                            {item.name}
                                        </Text>
                                        <Text style={[
                                            styles.itemSelectorPrice,
                                            { color: newSale.itemId === item.id ? '#fff' : '#666' }
                                        ]}>
                                            ${item.price} • {item.currentStock} in stock
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Quantity *</Text>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity
                                    style={styles.quantityButton}
                                    onPress={() => setNewSale({
                                        ...newSale,
                                        quantity: Math.max(1, parseInt(newSale.quantity) - 1).toString()
                                    })}
                                >
                                    <Ionicons name="remove" size={20} color="#666" />
                                </TouchableOpacity>
                                <TextInput
                                    style={styles.quantityInput}
                                    value={newSale.quantity}
                                    onChangeText={(text) => setNewSale({ ...newSale, quantity: text })}
                                    keyboardType="numeric"
                                />
                                <TouchableOpacity
                                    style={styles.quantityButton}
                                    onPress={() => setNewSale({
                                        ...newSale,
                                        quantity: (parseInt(newSale.quantity) + 1).toString()
                                    })}
                                >
                                    <Ionicons name="add" size={20} color="#666" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {(() => {
                            const selectedItemData = merchandiseItems.find(i => i.id === newSale.itemId);
                            return selectedItemData?.sizes && (
                                <View style={styles.inputGroup}>
                                    <Text style={styles.inputLabel}>Size</Text>
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                        {selectedItemData.sizes.map((size) => (
                                            <TouchableOpacity
                                                key={size}
                                                style={[
                                                    styles.sizeButton,
                                                    newSale.size === size && styles.selectedSizeButton
                                                ]}
                                                onPress={() => setNewSale({ ...newSale, size })}
                                            >
                                                <Text style={[
                                                    styles.sizeButtonText,
                                                    { color: newSale.size === size ? '#fff' : '#333' }
                                                ]}>
                                                    {size}
                                                </Text>
                                            </TouchableOpacity>
                                        ))}
                                    </ScrollView>
                                </View>
                            );
                        })()}

                        {(() => {
                            const selectedItemData = merchandiseItems.find(i => i.id === newSale.itemId);
                            return selectedItemData?.colors && (
                                <View style={styles.inputGroup}>
                                    <Text style={styles.inputLabel}>Color</Text>
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                        {selectedItemData.colors.map((color) => (
                                            <TouchableOpacity
                                                key={color}
                                                style={[
                                                    styles.colorButton,
                                                    newSale.color === color && styles.selectedColorButton
                                                ]}
                                                onPress={() => setNewSale({ ...newSale, color })}
                                            >
                                                <Text style={[
                                                    styles.colorButtonText,
                                                    { color: newSale.color === color ? '#fff' : '#333' }
                                                ]}>
                                                    {color}
                                                </Text>
                                            </TouchableOpacity>
                                        ))}
                                    </ScrollView>
                                </View>
                            );
                        })()}

                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Custom Price (Optional)</Text>
                            <TextInput
                                style={styles.textInput}
                                value={newSale.customPrice}
                                onChangeText={(text) => setNewSale({ ...newSale, customPrice: text })}
                                keyboardType="numeric"
                                placeholder="Leave blank for regular price"
                            />
                        </View>

                        {(() => {
                            const selectedItemData = merchandiseItems.find(i => i.id === newSale.itemId);
                            const quantity = parseInt(newSale.quantity) || 1;
                            const price = newSale.customPrice ? parseFloat(newSale.customPrice) : selectedItemData?.price || 0;
                            const total = quantity * price;

                            return selectedItemData && (
                                <View style={styles.salePreview}>
                                    <Text style={styles.salePreviewTitle}>Sale Preview</Text>
                                    <View style={styles.salePreviewRow}>
                                        <Text style={styles.salePreviewLabel}>Item:</Text>
                                        <Text style={styles.salePreviewValue}>{selectedItemData.name}</Text>
                                    </View>
                                    <View style={styles.salePreviewRow}>
                                        <Text style={styles.salePreviewLabel}>Quantity:</Text>
                                        <Text style={styles.salePreviewValue}>{quantity}</Text>
                                    </View>
                                    <View style={styles.salePreviewRow}>
                                        <Text style={styles.salePreviewLabel}>Price:</Text>
                                        <Text style={styles.salePreviewValue}>${price.toFixed(2)}</Text>
                                    </View>
                                    <View style={[styles.salePreviewRow, styles.salePreviewTotal]}>
                                        <Text style={styles.salePreviewTotalLabel}>Total:</Text>
                                        <Text style={styles.salePreviewTotalValue}>${total.toFixed(2)}</Text>
                                    </View>
                                </View>
                            );
                        })()}
                    </ScrollView>
                </SafeAreaView>
            </Modal>

            {/* Inventory Adjustment Modal */}
            <Modal
                visible={showInventoryAdjust}
                animationType="slide"
                presentationStyle="pageSheet"
            >
                <SafeAreaView style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <TouchableOpacity onPress={() => setShowInventoryAdjust(false)}>
                            <Ionicons name="close" size={24} color="#666" />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>Adjust Inventory</Text>
                        <TouchableOpacity onPress={handleInventoryAdjustment}>
                            <Text style={styles.saveButton}>Save</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={styles.modalContent}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Item *</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {merchandiseItems.map((item) => (
                                    <TouchableOpacity
                                        key={item.id}
                                        style={[
                                            styles.itemSelector,
                                            inventoryAdjustment.itemId === item.id && styles.selectedItemSelector
                                        ]}
                                        onPress={() => setInventoryAdjustment({
                                            ...inventoryAdjustment,
                                            itemId: item.id
                                        })}
                                    >
                                        <View style={[styles.itemSelectorIcon, { backgroundColor: getCategoryColor(item.category) }]}>
                                            <Ionicons
                                                name={getCategoryIcon(item.category) as any}
                                                size={16}
                                                color="#fff"
                                            />
                                        </View>
                                        <Text style={[
                                            styles.itemSelectorText,
                                            { color: inventoryAdjustment.itemId === item.id ? '#fff' : '#333' }
                                        ]}>
                                            {item.name}
                                        </Text>
                                        <Text style={[
                                            styles.itemSelectorPrice,
                                            { color: inventoryAdjustment.itemId === item.id ? '#fff' : '#666' }
                                        ]}>
                                            Current: {item.currentStock}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Adjustment (+/-) *</Text>
                            <TextInput
                                style={styles.textInput}
                                value={inventoryAdjustment.adjustment}
                                onChangeText={(text) => setInventoryAdjustment({
                                    ...inventoryAdjustment,
                                    adjustment: text
                                })}
                                keyboardType="numeric"
                                placeholder="e.g. +10 or -5"
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Reason *</Text>
                            <TextInput
                                style={[styles.textInput, styles.textArea]}
                                value={inventoryAdjustment.reason}
                                onChangeText={(text) => setInventoryAdjustment({
                                    ...inventoryAdjustment,
                                    reason: text
                                })}
                                placeholder="Reason for adjustment"
                                multiline
                                numberOfLines={3}
                            />
                        </View>

                        {(() => {
                            const selectedItemData = merchandiseItems.find(i => i.id === inventoryAdjustment.itemId);
                            const adjustment = parseInt(inventoryAdjustment.adjustment) || 0;
                            const newStock = selectedItemData ? Math.max(0, selectedItemData.currentStock + adjustment) : 0;

                            return selectedItemData && (
                                <View style={styles.adjustmentPreview}>
                                    <Text style={styles.adjustmentPreviewTitle}>Adjustment Preview</Text>
                                    <View style={styles.adjustmentPreviewRow}>
                                        <Text style={styles.adjustmentPreviewLabel}>Current Stock:</Text>
                                        <Text style={styles.adjustmentPreviewValue}>{selectedItemData.currentStock}</Text>
                                    </View>
                                    <View style={styles.adjustmentPreviewRow}>
                                        <Text style={styles.adjustmentPreviewLabel}>Adjustment:</Text>
                                        <Text style={[
                                            styles.adjustmentPreviewValue,
                                            { color: adjustment >= 0 ? '#2ecc71' : '#e74c3c' }
                                        ]}>
                                            {adjustment >= 0 ? '+' : ''}{adjustment}
                                        </Text>
                                    </View>
                                    <View style={[styles.adjustmentPreviewRow, styles.adjustmentPreviewTotal]}>
                                        <Text style={styles.adjustmentPreviewTotalLabel}>New Stock:</Text>
                                        <Text style={styles.adjustmentPreviewTotalValue}>{newStock}</Text>
                                    </View>
                                </View>
                            );
                        })()}
                    </ScrollView>
                </SafeAreaView>
            </Modal>

            {/* Item Detail Modal */}
            <Modal
                visible={showItemDetail}
                animationType="slide"
                presentationStyle="pageSheet"
            >
                <SafeAreaView style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <TouchableOpacity onPress={() => setShowItemDetail(false)}>
                            <Ionicons name="close" size={24} color="#666" />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>Item Details</Text>
                        <TouchableOpacity>
                            <Ionicons name="create" size={24} color="#3498db" />
                        </TouchableOpacity>
                    </View>

                    {selectedItem && (
                        <ScrollView style={styles.modalContent}>
                            <View style={styles.itemDetailCard}>
                                <View style={styles.itemDetailHeader}>
                                    <View style={[styles.itemDetailIcon, { backgroundColor: getCategoryColor(selectedItem.category) }]}>
                                        <Ionicons
                                            name={getCategoryIcon(selectedItem.category) as any}
                                            size={32}
                                            color="#fff"
                                        />
                                    </View>
                                    <View style={styles.itemDetailInfo}>
                                        <Text style={styles.itemDetailName}>{selectedItem.name}</Text>
                                        <Text style={styles.itemDetailCategory}>
                                            {selectedItem.category.charAt(0).toUpperCase() + selectedItem.category.slice(1)}
                                        </Text>
                                        <Text style={styles.itemDetailPrice}>${selectedItem.price}</Text>
                                    </View>
                                </View>

                                {selectedItem.description && (
                                    <Text style={styles.itemDescription}>{selectedItem.description}</Text>
                                )}
                            </View>

                            <View style={styles.detailSection}>
                                <Text style={styles.sectionTitle}>Stock Information</Text>
                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>Current Stock:</Text>
                                    <Text style={[
                                        styles.detailValue,
                                        { color: selectedItem.currentStock <= selectedItem.lowStockThreshold ? '#e74c3c' : '#2ecc71' }
                                    ]}>
                                        {selectedItem.currentStock}
                                    </Text>
                                </View>
                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>Low Stock Threshold:</Text>
                                    <Text style={styles.detailValue}>{selectedItem.lowStockThreshold}</Text>
                                </View>
                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>Total Sold:</Text>
                                    <Text style={styles.detailValue}>{selectedItem.totalSold}</Text>
                                </View>
                            </View>

                            <View style={styles.detailSection}>
                                <Text style={styles.sectionTitle}>Financials</Text>
                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>Selling Price:</Text>
                                    <Text style={styles.detailValue}>${selectedItem.price}</Text>
                                </View>
                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>Cost Price:</Text>
                                    <Text style={styles.detailValue}>${selectedItem.cost}</Text>
                                </View>
                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>Profit per Item:</Text>
                                    <Text style={[styles.detailValue, { color: '#2ecc71' }]}>
                                        ${(selectedItem.price - selectedItem.cost).toFixed(2)}
                                    </Text>
                                </View>
                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>Total Revenue:</Text>
                                    <Text style={styles.detailValue}>
                                        ${(selectedItem.price * selectedItem.totalSold).toLocaleString()}
                                    </Text>
                                </View>
                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>Total Profit:</Text>
                                    <Text style={[styles.detailValue, { color: '#2ecc71' }]}>
                                        ${((selectedItem.price - selectedItem.cost) * selectedItem.totalSold).toLocaleString()}
                                    </Text>
                                </View>
                            </View>

                            {selectedItem.sizes && (
                                <View style={styles.detailSection}>
                                    <Text style={styles.sectionTitle}>Available Sizes</Text>
                                    <View style={styles.sizesList}>
                                        {selectedItem.sizes.map((size, index) => (
                                            <View key={index} style={styles.sizeChip}>
                                                <Text style={styles.sizeChipText}>{size}</Text>
                                            </View>
                                        ))}
                                    </View>
                                </View>
                            )}

                            {selectedItem.colors && (
                                <View style={styles.detailSection}>
                                    <Text style={styles.sectionTitle}>Available Colors</Text>
                                    <View style={styles.colorsList}>
                                        {selectedItem.colors.map((color, index) => (
                                            <View key={index} style={styles.colorChip}>
                                                <Text style={styles.colorChipText}>{color}</Text>
                                            </View>
                                        ))}
                                    </View>
                                </View>
                            )}

                            <View style={styles.detailSection}>
                                <Text style={styles.sectionTitle}>Recent Sales</Text>
                                {recentSales
                                    .filter(sale => sale.itemId === selectedItem.id)
                                    .slice(0, 5)
                                    .map((sale, index) => (
                                        <View key={index} style={styles.recentSaleItem}>
                                            <Text style={styles.recentSaleDate}>{sale.date}</Text>
                                            <Text style={styles.recentSaleVenue}>{sale.venue}</Text>
                                            <Text style={styles.recentSaleQuantity}>{sale.quantity}x</Text>
                                            <Text style={styles.recentSaleTotal}>${sale.total}</Text>
                                        </View>
                                    ))}
                            </View>
                        </ScrollView>
                    )}
                </SafeAreaView>
            </Modal>
        </SafeAreaView>
    );
};

export default MerchandiseScreen;