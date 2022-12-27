
const getPostsService = async () => {
    return {
        data: [],
        error: true,
        message: "Sorry an error occurred",
        statusCode: 500,
    };
};

const createPostService = async (post) => {
    return {
        data: [],
        error: true,
        message: "Sorry an error occurred",
        statusCode: 500,
    };
};

const updatePostReaction = async (postId, userId) => {

    return {
        data: [],
        error: true,
        message: "Sorry an error occurred",
        statusCode: 500,
    };
};

const createNotification = ({ postId, authorId, userId }) => {
    return {
        data: [],
        error: true,
        message: "Sorry an error occurred",
        statusCode: 500,
    };
};

module.exports = {
    getPostsService,
    createPostService,
    updatePostReaction,
    createNotification,
};