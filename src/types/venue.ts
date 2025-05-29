export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface Venue {
    name: string;
    address: string;
    coordinates?: Coordinates;
    contactName: string;
    contactPhone: string;
    contactEmail?: string;
    capacity?: number;
    ticketsSold?: number;
    venuePercentage?: number;
    loadInInstructions?: string;
    parkingInstructions?: string;
    accessInstructions?: string;
    catering?: string;
    buyoutAmount?: number;
    greenRoomAmenities?: string[];
    nextVenue?: {
        name: string;
        distance: string;
        driveTime: string;
        loadInTime: string;
    };
}

export interface ShowSchedule {
    loadIn: string;
    soundcheck?: string;
    doors: string;
    showTime: string;
}

export interface TechnicalSpecs {
    backlineAvailable?: string[];
    wifiNetwork?: string;
    wifiPassword?: string;
    powerRequirements?: string;
}

export interface Settlement {
    contactName: string;
    contactPhone: string;
    paymentMethod: string;
    expectedTime?: string;
}
