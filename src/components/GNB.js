import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function GNB() {
  const count = useSelector((state) => state.gnb.count);

  return (
    <header>
      <div>count: {count}</div>
      <ul>
        <Link to="/">home</Link>
        <br />
        <Link to="/login">login</Link>
      </ul>
    </header>
  );
}
