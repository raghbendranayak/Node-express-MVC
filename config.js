var config = {
  development: {
    server: {
      port: 3000,
    },
    database: {
      url: 'mongodb://127.0.0.1:27017/db_online_new'
    }
  },
  testing: {
    server: {
      port: 3001
    },
    database: {
      url: 'mongodb://localhost/admin-app_test'
    }
  },
  production: {
    server: {
      port: 8080
    },
    database: {
      url: 'mongodb://localhost/admin-app'
    }
  }
};

module.exports = config[process.env.NODE_ENV] || config.development;
