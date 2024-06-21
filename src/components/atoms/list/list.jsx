import "./list.scss"

/**
 * ? LIST COMPONENT
 * * Renders a list of items as an unordered list.
 *
 * @param {Object} props
 *  The properties for the List component.
 *
 * @param {Array} props.list
 *  The array of items to render in the list
 *
 * @return {JSX.Element}
 *  The rendered list component
 */
const List = ({ list }) => {
  return (

    <ul className="list">
      {list.map((item, index) =>

        <li key={index}>
          {item}
        </li>
      )}
    </ul>
  )
}

export default List
