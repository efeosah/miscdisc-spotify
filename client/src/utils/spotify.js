import axios from "axios";

//TOKENS
const EXPIRATION_TIME = 3600 * 1000; // 3600 seconds * 1000 = 1 hour in milliseconds

const setTokenTimestamp = () =>
    window.localStorage.setItem("spotify_token_timestamp", Date.now());
const setLocalAccessToken = (token) => {
    setTokenTimestamp();
    window.localStorage.setItem("spotify_access_token", token);
};
const setLocalRefreshToken = (token) =>
    window.localStorage.setItem("spotify_refresh_token", token);
const getTokenTimestamp = () =>
    window.localStorage.getItem("spotify_token_timestamp");
const getLocalAccessToken = () =>
    window.localStorage.getItem("spotify_access_token");
const getLocalRefreshToken = () =>
    window.localStorage.getItem("spotify_refresh_token");

export const getHashParams = () => {
    const hashParams = {};
    let e;
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    return hashParams;
};

//Refresh the token
const refreshAccessToken = async () => {
    try {
        const { data } = await axios.get(
            `/refresh_token?refresh_token=${getLocalRefreshToken()}`
        );
        const { access_token } = data;
        setLocalAccessToken(access_token);
        window.location.reload();
        return;
    } catch (e) {
        console.error(e);
    }
};

// Get access token off of query params (called on application init)
export const getAccessToken = () => {
    const { error, access_token, refresh_token } = getHashParams();

    if (error) {
        console.error(error);
        refreshAccessToken();
    }

    // If token has expired
    if (Date.now() - getTokenTimestamp() > EXPIRATION_TIME) {
        console.warn("Access token has expired, refreshing...");
        refreshAccessToken();
    }

    const localAccessToken = getLocalAccessToken();

    // If there is no ACCESS token in local storage, set it and return `access_token` from params
    if (
        (!localAccessToken || localAccessToken === "undefined") &&
        access_token
    ) {
        setLocalAccessToken(access_token);
        setLocalRefreshToken(refresh_token);
        return access_token;
    }

    return localAccessToken;
};

export const token = getAccessToken();

//API CALLS

const header = {
    // Authorization : `Bearer ${token}`
};
