const User = require('./User');
// const Project = require('./Project');
const Review = require('./Review');
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

// Book.hasMany(Review, {
//   foreignKey: 'book_id'
// });

// Review.belongsTo(Book, {
//   foreignKey: 'book_id'
// });


module.exports = { User, Review, };

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
