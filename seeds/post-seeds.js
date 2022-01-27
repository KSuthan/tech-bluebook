const { Post } = require('../models');

const postData = [
    {
        title: "The Verge",
        post_content: "The Verge is an ambitious multimedia effort founded nine years ago to examine how technology will change life in the future for a massive mainstream audience.",
        user_id: 1
    },
    {
        title: "Engadget",
        post_content: "An original home for technology news and reviews, Engadget produces the internet's most compelling videos, reviews, features and breaking news about the people, products and ideas shaping our world.",
        user_id: 3
    },
    {
        title: "CNET",
        post_content: "CNET tracks all the latest consumer technology breakthroughs and shows you what's new, what matters and how technology can enrich your life",
        user_id: 4

    },
    {
        title: "TechCrunch",
        post_content: "Founded by Michael Arrington and later sold to AOL, TechCrunch has remained as one of the leaders covering tech industry news.",
        user_id: 5
    },
    {
        title: "Gizmodo",
        post_content: "Originally launched as a part of Gawker Media Network, Gizmodo is a design, technology, science and science fiction website that also features articles on politics.",
        user_id: 2
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;