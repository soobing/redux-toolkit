import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/userSlice";

export default function Login() {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.user.session);
  const isLogin = session !== null;

  const onClickButton = () =>
    dispatch(isLogin ? logout() : login("user정보가 들어간다고 가정"));
  return (
    <div>
      <h1>Login</h1>
      <p>현재 {isLogin ? "로그인" : "로그아웃"} 되어 있는 상태 입니다.</p>
      <button onClick={onClickButton}>
        이 버튼을 누르면 {isLogin ? "로그아웃" : "로그인"} 합니다.
      </button>
    </div>
  );
}
