import { UserRole } from '../../../types/user';

export const usePermissions = (userRole: UserRole) => {
    const canAccessFinancials = ['tour_manager', 'merch_manager', 'admin'].includes(userRole);
    const canAccessTechnical = ['tour_manager', 'stage_manager', 'admin'].includes(userRole);
    const canManageGuestList = ['tour_manager', 'security', 'admin'].includes(userRole);

    return {
        canAccessFinancials,
        canAccessTechnical,
        canManageGuestList,
    };
};
