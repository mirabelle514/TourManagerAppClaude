import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Message {
    id: string;
    senderId: string;
    receiverId: string;
    content: string;
    timestamp: string;
    status: 'sent' | 'delivered' | 'read';
    type: 'text' | 'image' | 'file';
    attachments?: string[];
}

export interface CommunicationState {
    messages: Message[];
    unreadCount: number;
    loading: boolean;
    error: string | null;
    filters: {
        conversationId: string;
        type: Message['type'] | 'all';
        status: Message['status'] | 'all';
    };
}

const initialState: CommunicationState = {
    messages: [],
    unreadCount: 0,
    loading: false,
    error: null,
    filters: {
        conversationId: '',
        type: 'all',
        status: 'all',
    },
};

const communicationSlice = createSlice({
    name: 'communication',
    initialState,
    reducers: {
        setMessages: (state: CommunicationState, action: PayloadAction<Message[]>) => {
            state.messages = action.payload;
            state.unreadCount = action.payload.filter(m => m.status === 'delivered').length;
            state.loading = false;
            state.error = null;
        },
        addMessage: (state: CommunicationState, action: PayloadAction<Message>) => {
            state.messages.push(action.payload);
        },
        updateMessageStatus: (
            state: CommunicationState,
            action: PayloadAction<{ id: string; status: Message['status'] }>
        ) => {
            const message = state.messages.find(m => m.id === action.payload.id);
            if (message) {
                message.status = action.payload.status;
                if (action.payload.status === 'read') {
                    state.unreadCount = Math.max(0, state.unreadCount - 1);
                }
            }
        },
        markAllAsRead: (state: CommunicationState) => {
            state.messages.forEach(message => {
                if (message.status === 'delivered') {
                    message.status = 'read';
                }
            });
            state.unreadCount = 0;
        },
        updateFilters: (state: CommunicationState, action: PayloadAction<Partial<CommunicationState['filters']>>) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        setLoading: (state: CommunicationState, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state: CommunicationState, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {
    setMessages,
    addMessage,
    updateMessageStatus,
    markAllAsRead,
    updateFilters,
    setLoading,
    setError,
} = communicationSlice.actions;

export default communicationSlice.reducer;
