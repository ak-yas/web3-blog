const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Blog", function () {
  it("Should create a post", async function () {  
    const Blog = await ethers.getContractFactory("Blog")
    const blog = await Blog.deploy("My blog")
    await blog.deployed()
    await blog.createPost("My first post", "123456789")

    const posts = await blog.fetchPosts()
    expect(posts[0].title).to.equal("My first post")
  });

  it("Should edit a post", async function () {  
    const Blog = await ethers.getContractFactory("Blog")
    const blog = await Blog.deploy("My blog")
    await blog.deployed()
    await blog.createPost("My first post", "123456789")

    await blog.updatePost(1, "My updated post", "01999", true)

    const posts = await blog.fetchPosts()
    expect(posts[0].title).to.equal("My updated post")
  });

  it("Should update the blog name", async function () {  
    const Blog = await ethers.getContractFactory("Blog")
    const blog = await Blog.deploy("My blog")
    await blog.deployed()

    let currentName = await blog.name()
    expect(currentName).to.equal("My blog")
    await blog.updateName("My new blog") 
    newName = await blog.name() 
    expect(newName).to.equal("My new blog")
  });
});
