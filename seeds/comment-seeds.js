const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Good site"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "We just reached a million subscribers! Fantastic"
    },
    {
        user_id: 2,
        post_id: 4,
        comment_text: "This is great news!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Good to hear!"
    },
   
    
   
    
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;