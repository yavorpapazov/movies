import classes from "./LinkButton.module.css"
import { Link } from "react-router-dom"

function LinkButton({to, children}) {
  return (
    <Link className={classes.btn} to={to}>{children}</Link>
  )
}

export default LinkButton