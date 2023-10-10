import session from "express-session"

const MongoStore = require("connect-mongo")(session);

let sessionStore = new MongoStore ({
    url: 'mongodb+srv://khoaiga91:Gacon_1001@fuelprediction.qbvwu7e.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp',
    autoReconnect: true,
    //autoRemove: "native"
})
/**
 * config session for app
 */
let config = (app) => {
    app.use(session({
        key: "express.sid",
        secret: "mySecret",
        store: sessionStore,
        resave: true,
        saveUninitialized: false,
        cookies: {
            maxAge: 1000 * 60 * 60 *24  //1 day
            
        }
    }))
};

module.exports = {
    config: config,
    sessionStore: sessionStore
}
