const express = require("express");
require("dotenv").config();
const cors = require("cors");
const querystring = require("query-string");
// const axios = require("axios");
const request = require("request");

const app = express();

app.use(cors());
app.use(express.json());

const CLIENT_ID = process.env.CLIENT_ID;
const REDIRECT_URL =
    process.env.REDIRECT_URI || "http://localhost:8888/callback";
const CLIENT_URI = process.env.CLIENT_URI || "http://localhost:3000";
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const PORT = process.env.PORT;

const generateRandomString = (length) => {
    let text = "";
    const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

app.get("/login", function (req, res) {
    var state = generateRandomString(16);
    var scope =
        "user-read-email user-read-private user-library-modify user-library-read user-modify-playback-state user-read-playback-state user-read-currently-playing user-read-recently-played user-read-playback-position user-top-read";

    res.redirect(
        "https://accounts.spotify.com/authorize?" +
            querystring.stringify({
                response_type: "code",
                client_id: CLIENT_ID,
                scope: scope,
                redirect_uri: REDIRECT_URL,
                state: state,
            })
    );
});

app.get("/callback", function (req, res) {
    var code = req.query.code || null;
    var state = req.query.state || null;

    if (state === null) {
        res.redirect(
            "/#" +
                querystring.stringify({
                    error: "state_mismatch",
                })
        );
    } else {
        var authOptions = {
            url: "https://accounts.spotify.com/api/token",
            form: {
                code: code,
                redirect_uri: REDIRECT_URL,
                grant_type: "authorization_code",
            },
            headers: {
                Authorization: `Basic ${new Buffer.from(
                    `${CLIENT_ID}:${CLIENT_SECRET}`
                ).toString("base64")}`,
            },
            json: true,
        };

        request.post(authOptions, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                const access_token = body.access_token;
                const refresh_token = body.refresh_token;

                // we can also pass the token to the browser to make requests from there
                res.redirect(
                    `${CLIENT_URI}/#` +
                        querystring.stringify({
                            access_token: access_token,
                            refresh_token: refresh_token,
                        })
                );
            } else {
                res.redirect(
                    "/#" +
                        querystring.stringify({
                            error: "invalid_token",
                        })
                );
            }
        });
    }
});

app.get("/refresh_token", function (req, res) {
    var refresh_token = req.query.refresh_token;
    const authOptions = {
        url: "https://accounts.spotify.com/api/token",
        headers: {
            Authorization: `Basic ${new Buffer.from(
                `${CLIENT_ID}:${CLIENT_SECRET}`
            ).toString("base64")}`,
        },
        form: {
            grant_type: "refresh_token",
            refresh_token,
        },
        json: true,
    };

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var access_token = body.access_token;
            res.send({
                access_token: access_token,
            });
        }
    });
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});