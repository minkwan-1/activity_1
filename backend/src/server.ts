import express, { Request, Response } from "express";
import dotenv from "dotenv";

// 환경 변수 로드
dotenv.config();
// 커밋확인용
// Express 앱 생성
const app = express();

// 포트 설정
// 포트설정
const PORT = process.env.PORT || 3000;

// 기본 라우트 설정
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
