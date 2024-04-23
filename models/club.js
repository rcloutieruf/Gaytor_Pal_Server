const { model, Schema } = require('mongoose');

clubSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String,
    club_name: String,
    category: String,
    events: [
        {
            title: String,
            description: String,
            date: String,
            dateReduced: String
        }
    ],
    followers: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  });

module.exports = model('Club', clubSchema);
