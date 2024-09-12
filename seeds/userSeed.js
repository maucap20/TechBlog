const { User } = require("../models");

const data = [
  {
    username: "username1",
    password: "password1",
  },
  {
    username: "username2",
    password: "password2",
  },
];

console.log("------------------------------------");
console.log(User);
const seedUser = () => User.bulkCreate(data);

module.exports = seedUser;
