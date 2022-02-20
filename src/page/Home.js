import { useDispatch } from "react-redux";

import { decrement, increment } from "../store/gnbSlice";

export default function Home() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>HOME</h1>
      <section>
        <p>GNB의 카운터를 조정해봅시다</p>
        <button onClick={() => dispatch(increment())}> + </button>
        <button onClick={() => dispatch(decrement())}> - </button>
      </section>
    </div>
  );
}
