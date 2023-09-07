import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/houses">Home</Link> | <Link to="/houses/new">New House</Link>
      </nav>
    </header>
  );
}
