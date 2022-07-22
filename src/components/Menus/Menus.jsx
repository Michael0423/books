import { Link } from "react-router-dom";

export function Menus({ menus }) {
  return (
    <>
      {
        menus.map((m, i) => {
          return (<Link to={m.link} key={"menu"+i}>{m.name}</Link>)
        })
      }
    </>
  )
}