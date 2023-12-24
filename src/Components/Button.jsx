import { Link } from "react-router-dom";

function Button({text,clas}) {
  return <Link to={"#"} children={text} className={clas}/>;
}

export default Button;
