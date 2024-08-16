// server.ts
import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();

// CORS 설정
app.use(
  cors({
    origin: "http://localhost:5173", // 프론트엔드가 실행 중인 주소
    credentials: true,
  })
);

const PORT = process.env.PORT || 5000;

// 카카오 로그인 URL 생성
app.get("/auth/kakao", (req: Request, res: Response) => {
  const redirectUri = `${process.env.KAKAO_REDIRECT_URI}/auth/kakao/callback`;
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=code`;

  res.json({ redirectUrl: kakaoAuthUrl });
});

// 카카오 콜백 핸들러
app.get("/auth/kakao/callback", async (req: Request, res: Response) => {
  const code = req.query.code as string;

  if (!code) {
    return res.status(400).json({ error: "No code provided" });
  }

  try {
    const tokenResponse = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        client_id: process.env.KAKAO_CLIENT_ID as string,
        redirect_uri: `${process.env.KAKAO_REDIRECT_URI}/auth/kakao/callback`,
        code: code,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { access_token } = tokenResponse.data;

    // Access token을 이용해 카카오 사용자 정보 요청
    const userResponse = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    // 로그인 후 프론트엔드로 리다이렉트
    res.redirect(`http://localhost:5173/home`);
  } catch (error) {
    console.error("Error during Kakao OAuth process:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
