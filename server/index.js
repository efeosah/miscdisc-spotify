const express = require("express");
require("dotenv").config();
const cors = require("cors");
const querystring = require("query-string");
const path = require("path");
const request = require("request");
const history = require('connect-history-api-fallback')

const app = express();

app.use(cors());
app.use(express.json());

const CLIENT_ID = process.env.CLIENT_ID;
let REDIRECT_URL = process.env.REDIRECT_URI ;
let CLIENT_URI = process.env.CLIENT_URI;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const PORT = process.env.PORT;

console.log(process.env.NODE_ENV)

// if (process.env.NODE_ENV !== "production") {
//     REDIRECT_URL = "http://localhost:8888/callback";
//     CLIENT_URI = "http://localhost:3000";
// }

app.use(express.static(path.resolve(__dirname, "../client/build")))
    .use(cors())
    .use(
        history({
            verbose: true,
            rewrites: [
                { from: /\/login/, to: "/login" },
                { from: /\/callback/, to: "/callback" },
                { from: /\/refresh_token/, to: "/refresh_token" },
            ],
        })
    )
    .use(express.static(path.resolve(__dirname, "../client/build")));

app.use(express.static(path.resolve(__dirname, "../client/build")));

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
            // console.log(response.body);

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
    // console.log(req);
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

app.get("*", function (request, response) {
    response.sendFile(
        path.resolve(__dirname, "../client/public", "index.html")
    );
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
