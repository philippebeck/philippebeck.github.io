import "./list.scss"

/**
 * ? LIST ATOM
 * * Renders the list Atom
 * * with the specified Array of items
 * * as an unordered list.
 *
 * @param {Object} props
 *  The Properties for the List Atom.
 *
 * @param {Array} props.array
 *  The Array of items to render in the List.
 *
 * @return {JSX.Element}
 *  The rendered List Atom.
 */
const List = ({ array }) => {

  return (
    <ul className="list">
      {array.map((item, index) => 
        <li key={index}>{item}</li>
      )}
    </ul>
  )
}

export default List
