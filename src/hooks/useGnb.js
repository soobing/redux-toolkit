import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/gnbSlice";

function useGnb() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.gnb.count);

  return {
    count,
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment()),
  };
}

export default useGnb;
