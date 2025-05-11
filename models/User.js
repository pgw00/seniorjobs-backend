const mongoose = require('mongoose');

// 스키마 정의
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  fullname: { type: String, required: true },
  role: { type: String, required: true },
  agreeTerms: { type: Boolean, required: true },
});

// 모델 정의
const User = mongoose.model('User', userSchema);

// 모델 내보내기
module.exports = User;
