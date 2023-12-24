import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavLink({ link, text }) {
  return (
    <li>
      <Link to={link} children={text} />
    </li>
  );
}

export default NavLink;
