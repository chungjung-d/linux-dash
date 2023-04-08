module.exports = {
  apps : [{
    name: 'Akali Dash',
    script: './app/server/index.js',
    watch: false,
    env: {
      "LINUX_DASH_SERVER_PORT": 2800
    },
  }],
};
