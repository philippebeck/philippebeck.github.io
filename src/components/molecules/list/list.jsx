import Link from "../../atoms/link/link"
import "./list.css"

const List = ({ array }) => {

  return (
    <ul className="list">
    { array.map((item, index) => 
      <li key={index}>

        <Link
          url={item.url}
          content={item.name}
          design="btn"
        />
      </li>
    )}
  </ul>
  )
}

export default List
