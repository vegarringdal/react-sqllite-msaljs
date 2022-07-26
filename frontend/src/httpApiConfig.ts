const url = `${window.location.protocol}//${window.location.host}`;
const apiUrl = `${url}/api`;

export const httpApiConfig = {
    authRefresh_url: `${apiUrl}/authUpdate`,
    login_url: `${apiUrl}/auth`,
    azure_config_url: `${apiUrl}/azureConfig`,
    api_url: apiUrl
};
