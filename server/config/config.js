var config = {};

config.environment = process.env.NODE_ENV || 'development';


// Server settings
config.server = {
    host: '127.0.0.1',
    port: process.env.NODE_PORT || process.env.PORT || 3000
};

// Export configuration object
module.exports = config;