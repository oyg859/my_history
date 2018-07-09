const cfg = require('./config/config');

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'myhistory',
      script    : 'bin/www',
      // watch: ["bin","routes","views","system"], watch는 꺼두었다. 어짜피 배포후에 다시 시작하기 때문, ignore_watch 또한 의미가 없다.
      ignore_watch : ["node_modules","config"],
      watch_options: {
          "followSymlinks": false
      },
      max_memory_restart : "1G", // 1기가 이상 메모리를 사용하면 리셋
      env: {        //env 관련은 사용하진 않지만 대략 설치, 배포 등을 다르게 할 때 쓰인다.
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {  //이름은 정하기 나름이지만 의도로는 비어있는 타겟서버에 소스를 밀어넣고 의존요소 설치 목적
      user : cfg.pm2.user,
      host : [  //현재 한대만 넣어두었지만. 어레이 안에 a,b,c,d,e 서버를 넣어주면 된다. production용과 dev용 호스트들을 달리 두면 된다.
          {
              "host": cfg.pm2.host, 
              "port": cfg.pm2.port,
          }
        ],
      ref  : 'origin/master',   
      repo : 'https://github.com/oyg859/my_history.git',   //깃 저장소 위치 by ssh
      path : cfg.pm2.path,   // 타겟서버 저장소
        // 'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --env production'
      'post-deploy' : 'npm install && npm run build --env production'
    },
    dev : {   // 설치 후 재시작(명칭은 사실 build가 적당하다)
      user : cfg.pm2.user,
      host : [
        {
          "host": cfg.pm2.host,
          "port": cfg.pm2.port,
        }
      ],
      ref  : 'origin/master',
      repo : 'https://github.com/oyg859/my_history.git',
      path : cfg.pm2.path,
      //  예제소스 =>  'post-deploy' : 'npm install && cd fe && npm install && npm run build && cd .. && pm2 startOrRestart ecosystem.config.js --env dev',
      'post-deploy' : 'npm install && npm run build && pm2 startOrRestart ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};