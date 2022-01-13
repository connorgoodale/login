dbPassword = 'mongodb://new:new@cluster0-shard-00-00.5ghnv.mongodb.net:27017,cluster0-shard-00-01.5ghnv.mongodb.net:27017,cluster0-shard-00-02.5ghnv.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-hta69t-shard-0&authSource=admin&retryWrites=true&w=majority';

module.exports = {
    mongoURI: dbPassword
};
