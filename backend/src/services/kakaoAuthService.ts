// services/kakaoAuthService.ts
import axios from "axios";

export const getKakaoAuthUrl = (): string => {
  const redirectUri = `${process.env.KAKAO_REDIRECT_URI}/auth/kakao/callback`;
  return `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=code`;
};

export const getKakaoAccessToken = async (code: string): Promise<string> => {
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

  return tokenResponse.data.access_token;
};

export const getKakaoUserInfo = async (accessToken: string) => {
  const userResponse = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return userResponse.data;
};
