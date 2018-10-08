const path = require('path');

const basePath = path.join(__dirname);

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    // API GATEWAY
    {
      name: 'Gateway',
      script: basePath + '/api-gateway/server.js',
      watch: true,
      
    },

    // DB SERVICE
    {
      name: 'Auth Service',
      script: basePath + '/authService/server.js',
      watch: true,
      
    },

    //Trade Service

    {
        name: 'Trade Service',
        script: basePath + '/tradeService/server.js',
        watch: true,
        
      },

    // Notification SERVICE
    {
      name: 'Notification Service',
      script: basePath + '/notificationService/server.js',
      watch: true
    }
  ]
};
