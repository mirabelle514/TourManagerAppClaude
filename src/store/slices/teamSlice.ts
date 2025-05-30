import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    email: string;
    phone: string;
    status: 'active' | 'inactive' | 'on_leave';
    skills: string[];
    assignedTours: string[];
}

export interface TeamState {
    members: TeamMember[];
    selectedMember: TeamMember | null;
    loading: boolean;
    error: string | null;
    filters: {
        role: string;
        status: TeamMember['status'] | 'all';
        skill: string;
    };
}

const initialState: TeamState = {
    members: [],
    selectedMember: null,
    loading: false,
    error: null,
    filters: {
        role: '',
        status: 'all',
        skill: '',
    },
};

const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        setMembers: (state: TeamState, action: PayloadAction<TeamMember[]>) => {
            state.members = action.payload;
            state.loading = false;
            state.error = null;
        },
        addMember: (state: TeamState, action: PayloadAction<TeamMember>) => {
            state.members.push(action.payload);
        },
        updateMemberStatus: (
            state: TeamState,
            action: PayloadAction<{ id: string; status: TeamMember['status'] }>
        ) => {
            const member = state.members.find(m => m.id === action.payload.id);
            if (member) {
                member.status = action.payload.status;
            }
        },
        assignTour: (state: TeamState, action: PayloadAction<{ memberId: string; tourId: string }>) => {
            const member = state.members.find(m => m.id === action.payload.memberId);
            if (member && !member.assignedTours.includes(action.payload.tourId)) {
                member.assignedTours.push(action.payload.tourId);
            }
        },
        setSelectedMember: (state: TeamState, action: PayloadAction<TeamMember | null>) => {
            state.selectedMember = action.payload;
        },
        updateFilters: (state: TeamState, action: PayloadAction<Partial<TeamState['filters']>>) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        setLoading: (state: TeamState, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state: TeamState, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {
    setMembers,
    addMember,
    updateMemberStatus,
    assignTour,
    setSelectedMember,
    updateFilters,
    setLoading,
    setError,
} = teamSlice.actions;

export default teamSlice.reducer;
