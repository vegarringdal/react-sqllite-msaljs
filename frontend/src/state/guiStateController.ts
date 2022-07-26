import create from "zustand";

type guiStateControllerType = {
    currentUser: string;
    currentUserID: string;
    allUserRoles: string[];
    isCheckingAuthentication: boolean;
    isAuthenticationChecked: boolean;
};

/**
 * Mostly app/gui state, these might be moved into own later
 */
export const guiStateController = create<guiStateControllerType>(() => ({
    currentUser: "",
    currentUserID: "",
    allUserRoles: [],
    isCheckingAuthentication: false,
    isAuthenticationChecked: false
}));
