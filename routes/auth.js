// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // 개인회원 모델
const Corporate = require('../models/Corporate'); // 기업회원 모델
const bcrypt = require('bcryptjs');

// 개인회원가입 API
router.post('/register-personal', async (req, res) => {
  const { username, password, email, phone, address,fullname,role,agreeTerms } = req.body;

  if (!username || !password || !email || !phone || !fullname || !address || !agreeTerms) {
    return res.status(400).json({ message: "모든 필드를 입력해주세요." });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      password: hashedPassword,
      email,
      phone,
      address,
      fullname,
      role: 'personal',
      agreeTerms,
    });

    await newUser.save();
    res.status(201).json({ message: "회원가입 성공", user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "서버 오류" });
  }
});

// 기업회원가입 API
router.post('/register-corporate', async (req, res) => {
  const { username, password, email, companyName, businessNumber, businessContent, address, role, agreeTerms } = req.body;

  if (!username || !password || !email || !companyName || !businessNumber || !businessContent || !address || !agreeTerms) {
    return res.status(400).json({ message: "모든 필드를 입력해주세요." });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newCorporate = new Corporate({
      username,
      password: hashedPassword,
      email,
      companyName,
      businessNumber,
      businessContent,
      address,
      role: 'corporate',
      agreeTerms,
    });

    await newCorporate.save();
    res.status(201).json({ message: "기업회원 가입 성공", corporate: newCorporate });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "서버 오류" });
  }
});

module.exports = router;
