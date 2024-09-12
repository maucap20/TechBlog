const { Post } = require("../models");

const data = [
  {
    author: 1,
    title: "Title1",
    content: "Content1",
  },
  {
    author: 2,
    title: "Title2",
    content: "Content2",
  },
];

console.log("------------------------------------");
console.log(require("../models"));
console.log(Post);
const seedPost = () => Post.bulkCreate(data);

module.exports = seedPost;
