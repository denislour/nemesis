import User from "./user";
import Post from "./post";

// Association
User.hasMany(Post);
Post.belongsTo(User);
