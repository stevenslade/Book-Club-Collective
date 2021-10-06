const User = require('./User');
// const Project = require('./Project');
const Club = require('./Club')
const Review = require('./Review');
// const Comment = require('./Comment');
// const Book = require('./Book');

// User.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

User.hasMany(Review, {
  foreignKey: 'user_id'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Club, {
  foreignKey: 'user_id'
});

Club.belongsTo(User, {
  foreignKey: 'user_id'
});

// Club.hasMany(Comment, {
//   foreignKey: 'user_id'
// });

// Comment.belongsTo(Club, {
//   foreignKey: 'user_id'
// });

// Book.hasMany(Review, {
//   foreignKey: 'book_id'
// });

// Review.belongsTo(Book, {
//   foreignKey: 'book_id'
// });


module.exports = { User, Review, Club };
// module.exports = { User, Review, Club, Comment };

// const User = require('./User');
// const Review = require('./Review');
// const Book = require('./Book');

// User.hasMany(Review, {
//   foreignKey: 'user_id'
// });

// Review.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// Book.hasMany(Review, {
//   foreignKey: 'book_id'
// });

// Review.belongsTo(Book, {
//   foreignKey: 'book_id'
// });

// module.exports = { User, Review, Book };
