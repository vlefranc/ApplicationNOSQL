let config = {};

config.PORT = process.env.PORT || 8888;
config.database = {
    MONGODB_URL: "mongodb://localhost:27017/applicationdb"
};

module.exports = config;