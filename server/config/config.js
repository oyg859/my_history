var config = {};

config.environment = process.env.NODE_ENV || 'development';


// Server settings
config.server = {
    //host: '127.0.0.1',
    host: 'http://ec2-13-209-77-58.ap-northeast-2.compute.amazonaws.com',
    port: process.env.NODE_PORT || process.env.PORT || 3000
};

// Export configuration object
module.exports = config;