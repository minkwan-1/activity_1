import { Router, Request, Response } from "express";
import session from "express-session";
import {
  getKakaoAuthUrl,
  getKakaoAccessToken,
  getKakaoUserInfo,
} from "../services/kakaoAuthService";

// 세션 타입 확장
declare module "express-session" {
  interface SessionData {
    user?: any; // 또는 정확한 타입으로 설정 (예: User 타입)
  }
}

const router = Router();

// 카카오 로그인 URL 생성
router.get("/kakao", (req: Request, res: Response) => {
  const kakaoAuthUrl = getKakaoAuthUrl();
  res.json({ redirectUrl: kakaoAuthUrl });
});

// 카카오 콜백 핸들러
router.get("/kakao/callback", async (req: Request, res: Response) => {
  const code = req.query.code as string;

  if (!code) {
    return res.status(400).json({ error: "No code provided" });
  }

  try {
    const accessToken = await getKakaoAccessToken(code);
    const userInfo = await getKakaoUserInfo(accessToken);

    // 세션에 사용자 정보 저장
    req.session.user = userInfo;

    // 프론트엔드로 리다이렉트
    res.redirect("http://localhost:5173/");
  } catch (error) {
    console.error("Error during Kakao OAuth process:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 로그아웃 핸들러
router.post("/logout", (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Logout failed" });
    }
    res.clearCookie("connect.sid");
    res.json({ message: "Logout successful" });
  });
});

export default router;
