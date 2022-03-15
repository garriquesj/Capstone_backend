module.exports = {
  HOST: "localhost",
  USER: "jay",
  PASSWORD: "jay",
  DB: "arcsource",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
