require('dotenv').config(); // Ensure environment variables are loaded
const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//Get all posts
app.get("/posts", async (req, res) => {
  const posts = await prisma.post.findMany({
    include:{user:true},
    take: 20,
    orderBy: { id: "desc" },
  });

  setTimeout(() => {
    res.json(posts);
  }, 2000);
});

//Get post by id
app.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  });

  res.json(post);
});

//Create a new post
app.post("/posts", async (req, res) => {
  const {content} = req.body;
  if (!content) {
    return res.status(400).json({ msg: "content is required" });
  }

  const post = await prisma.post.create({
    data: {
      content,
      userId: 1,
    },
    include: { user: true },
  });

  res.status(201).json(post);
});

//Delete a post
app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const post = await prisma.post.delete({
    where: { id: Number(id) },
  });

  console.log(post);
});

app.listen(8088, () => {
  console.log("Express API running at 8088");
});
