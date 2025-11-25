const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName:  { type: String, required: true, trim: true },
  email:     { type: String, required: true, unique: true, lowercase: true, trim: true },
  age:       { type: Number, min: 0 },
  course:    { type: String, trim: true },
  createdAt: { type: Date, default: Date.now }
});

StudentSchema.index({ firstName: 'text', lastName: 'text', email: 'text', course: 'text' });

module.exports = mongoose.model('Student', StudentSchema);
