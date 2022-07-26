import {
    Configuration,
    PopupRequest,
    PublicClientApplication,
    EventType,
    EventMessage,
    AuthenticationResult
} from "@azure/msal-browser";
import { httpApiConfig } from "../httpApiConfig";
import { serviceStateController } from "../state/serviceStateController";

let msalConfig: Configuration;
let msalInstance: PublicClientApplication;
let loginRequest: PopupRequest;

let force = true;

// helper so we dont go crzy on getting token
export function forceReload() {
    const oldValue = force;
    force = false;
    return oldValue;
}

async function init() {
    if (!msalConfig) {
        const response = await fetch(httpApiConfig.azure_config_url, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: null
        });

        // if error show this
        if (!response.ok || !response.body) {
            serviceStateController.setState({
                errorDialogHeader: "Error",
                errorDialogContent: "Unable to contact backend to get azure config",
                errorDialogActivated: true
            });
            return false;
        }

        const json = await response.json();

        msalConfig = {
            auth: {
                clientId: json.AZURE_CLIENT_ID,
                authority: `https://login.microsoftonline.com/${json.AZURE_TENDANT_ID}/`,
                redirectUri: "/",
                postLogoutRedirectUri: "/"
            }
        };
        msalInstance = new PublicClientApplication(msalConfig);
        loginRequest = {
            scopes: json.AZURE_SCOPES
        };
        msalInstance.addEventCallback((event: EventMessage) => {
            if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
                const payload = event.payload as AuthenticationResult;
                const account = payload.account;
                msalInstance.setActiveAccount(account);
            }
            if (event.eventType === EventType.LOGIN_FAILURE && event.payload) {
                console.log("login failure");
            }
        });

        const accounts = msalInstance.getAllAccounts();
        if (accounts.length > 0) {
            msalInstance.setActiveAccount(accounts[0]);
        }
    }

    return true;
}

export async function getAzureAuth(force = forceReload()) {
    const ok = await init();
    if (!ok) {
        return null;
    }

    const response = await msalInstance
        .acquireTokenSilent({ scopes: loginRequest.scopes, forceRefresh: force })
        .catch(() => {
            // if error use popup
            return msalInstance.loginPopup(loginRequest);
        });

    return response;
}

export async function getAccessToken() {
    const ok = await init();
    if (!ok) {
        return null;
    }

    const response = await msalInstance.acquireTokenSilent(loginRequest).catch(() => {
        // if error use popup
        return msalInstance.loginPopup(loginRequest);
    });
    return response.accessToken;
}
