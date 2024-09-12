const sequelize = require("../config/connection");

const seedUser = require("./userSeed");
const seedPost = require("./postSeed");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  console.log("Seed User successful");

  await seedPost();
  console.log("Seed Post successful");
  process.exit(0);
};

seedAll();
