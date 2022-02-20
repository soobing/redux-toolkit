import { Link } from "react-router-dom";
import useGnb from "../hooks/useGnb";

export default function GNB() {
  const { count } = useGnb();

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
