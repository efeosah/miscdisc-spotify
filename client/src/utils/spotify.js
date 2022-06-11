import axios from "axios";


const baseURL = "https://api.spotify.com/v1/"

//take care of tokens before 
// window.localStorage.removeItem('spotify_access_token');
// window.localStorage.removeItem('spotify_refresh_token');
// window.localStorage.removeItem("spotify_token_timestamp")
//TOKENS
const EXPIRATION_TIME = 3600; // 3600 seconds * 1000 = 1 hour in milliseconds

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
    // const split = q.split("&")
    // const access = hashParams[0] = split[0].split("=")[1]
    // hashParams[1] = split[1].split("=")[1]

    // console.log("access: ", access)

    while ((e = r.exec(q))) {
        hashParams[e[1]] = e[2];
    }

    console.log(hashParams)


    return hashParams;
};

//Refresh the token
export const refreshAccessToken = async () => {
    window.localStorage.removeItem('spotify_access_token');
    try {
        console.log(getLocalRefreshToken())
        const { data } = await axios.get(
            `http://localhost:8888/refresh_token?refresh_token=${getLocalRefreshToken()}`
        );
        const { access_token } = data;
        console.log(access_token)
        setLocalAccessToken(access_token);
        setTokenTimestamp();
        window.location.reload();
        return;
    } catch (e) {
        console.error(e);
    }
};

// Get access token off of query params (called on application init)
export const getAccessToken = () => {
    const { error, access_token, refresh_token } = getHashParams();

    // console.log(error)
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
    console.log(localAccessToken)

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

export const logout = () => {
    window.localStorage.removeItem('spotify_token_timestamp');
    window.localStorage.removeItem('spotify_access_token');
    window.localStorage.removeItem('spotify_refresh_token');
    window.location.reload();
};

console.log(token)

//API CALLS

const headers = {
    Authorization : `Bearer ${token}`,
    'Content-type' : 'application/json'
};



//Spotify API calls

// export const getUser = () => axios.get(`${baseURL}me`, {header})
export const getUser = () => fetch(`${baseURL}me`, {headers})

export const search = (query) => fetch(`${baseURL}search?q=${query}&type=album%2Ctrack%2Cartist%2Cplaylist&market=ES&limit=10&offset=0`, {headers})

export const getFeatured = () => fetch(`${baseURL}browse/featured-playlists?country=CA&offset=7`, {headers})

export const getRecentlyPlayed = () => fetch(`${baseURL}me/player/recently-played`, {headers})