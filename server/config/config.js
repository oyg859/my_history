var config = {};

config.environment = process.env.NODE_ENV || 'development';


// Server settings
config.server = {
     host: '127.0.0.1',
    //host: 'http://ec2-13-209-77-58.ap-northeast-2.compute.amazonaws.com',
    port: process.env.NODE_PORT || process.env.PORT || 3000
};

// pm2 setting
config.pm2 = {
    user: 'ubuntu',
    host: 'http://ec2-13-209-77-58.ap-northeast-2.compute.amazonaws.com',
    port: '22', 
    path: '/project/server',  //타겟서버 저장소
  }

// Export configuration object
module.exports = config;
