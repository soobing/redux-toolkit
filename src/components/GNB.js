import { Link } from "react-router-dom";

export default function GNB() {
  return (
    <header>
      <ul>
        <Link to="/">home</Link>
        <br />
        <Link to="/login">login</Link>
      </ul>
    </header>
  );
}
