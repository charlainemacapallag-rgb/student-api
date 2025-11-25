const Student = require('../models/Student');

exports.createStudent = async (req, res) => {
  try {
    const s = await Student.create(req.body);
    return res.status(201).json({ success: true, data: s });
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ success:false, message:'Email exists' });
    return res.status(400).json({ success:false, message: err.message });
  }
};

exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.status(200).json({ success:true, data: students });
};

exports.getStudentById = async (req, res) => {
  const s = await Student.findById(req.params.id);
  if (!s) return res.status(404).json({ success:false, message:'Not found' });
  res.json({ success:true, data: s });
};

exports.replaceStudent = async (req, res) => {
  const s = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, overwrite: true, runValidators: true });
  if (!s) return res.status(404).json({ success:false, message:'Not found' });
  res.json({ success:true, data: s });
};

exports.updateStudent = async (req, res) => {
  const s = await Student.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, runValidators: true });
  if (!s) return res.status(404).json({ success:false, message:'Not found' });
  res.json({ success:true, data: s });
};

exports.deleteStudent = async (req, res) => {
  const s = await Student.findByIdAndDelete(req.params.id);
  if (!s) return res.status(404).json({ success:false, message:'Not found' });
  res.json({ success:true, message:'Deleted' });
};

exports.searchStudents = async (req, res) => {
  const q = req.query.q || '';
  const results = q ? await Student.find({ $text: { $search: q } }) : [];
  res.json({ success:true, data: results });
};
