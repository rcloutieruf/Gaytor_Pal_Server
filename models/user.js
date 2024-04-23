const { model, Schema } = require('mongoose');

userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String,
    assignments: [
        {
            title: String,
            description: String,
            dueDate: String,
            dueDateReduced: String,
            category: String,
            completed: Boolean
        }
    ],
  });

module.exports = model('User', userSchema);
