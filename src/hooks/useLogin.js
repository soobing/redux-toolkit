import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/userSlice";

function useLogin() {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.user.session);

  return {
    session,
    isLogin: session !== null,
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
  };
}

export default useLogin;
