import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col justify-center text-center bg-gray-400">
      <ul className="flex justify-around">
        <li>
            <Link to="/">
            Home
            </Link>
        </li>
        <li>
          About Us
        </li>

        <li>Contact Us</li>
        <li>Nothing</li>
      </ul>
    </div>
  );
};

export default Header;
