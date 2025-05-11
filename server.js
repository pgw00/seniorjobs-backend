// 필요한 모듈 임포트
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// 환경 변수 로딩
dotenv.config();

// MongoDB 연결
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB 연결 성공');
}).catch((err) => {
  console.error('MongoDB 연결 실패:', err);
});

// Express 앱 설정
const app = express();

// CORS 설정
app.use(cors());

// JSON 요청 본문을 파싱할 수 있도록 설정
app.use(express.json());

// auth.js 라우터 연결
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// 서버 실행
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`서버가 ${port}번 포트에서 실행 중입니다.`);
});
