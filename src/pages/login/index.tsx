import LoginCharacter from "../../assets/images/character-login.svg";
import LoginLogo from "../../assets/images/login-logo.svg";
import KakaoBtn from "../../assets/button/kakao-btn.svg";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-row items-center mb-10">
        <img src={LoginCharacter} alt="LoginCharacter" className="w-40 mb-4" />
        <img src={LoginLogo} alt="LoginLogo" className="w-32" />
      </div>

      <span className="text-12 text-gray-300">SNS 계정으로 간편 가입하기</span>
      <img
        onClick={() =>
          (window.location.href =
            "https://api.hackathoner.store/oauth2/authorization/kakao")
        }
        src={KakaoBtn}
        alt="KakaoBtn"
        className="w-64 cursor-pointer"
      />
    </div>
  );
}

export default Login;
