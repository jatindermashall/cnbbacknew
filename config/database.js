module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'a07yd3a6okcidwap.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'mzccusmuoaat5sid'),
        username: env('DATABASE_USERNAME', 'ixjfmzl3x5auh816'),
        password: env('DATABASE_PASSWORD', 'xh50kd15fyuxxdct'),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  },
});
