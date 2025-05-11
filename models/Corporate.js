const mongoose = require('mongoose');

// 기업회원 스키마 정의
const corporateSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String },
  companyName: { type: String, required: true },
  businessNumber: { type: String, required: true },
  businessContent: { type: String, required: true },
  address: { type: String },
  role: { type: String, required: true },
  agreeTerms: { type: Boolean, required: true }
});

// 모델 생성
const Corporate = mongoose.model('Corporate', corporateSchema);

module.exports = Corporate;
