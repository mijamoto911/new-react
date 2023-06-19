import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div
      style={{
        height: 100,
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: 10,
          listStyle: "none",
          padding: 20,
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="todoList"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Todo-list
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
