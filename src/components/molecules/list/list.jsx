import Link from "../../atoms/link/link"

import "./list.scss"

/**
 * ? LIST COMPONENT
 * * Renders a list of items as an unordered list.
 * * Each item is rendered as a list item with a link.
 * * The link is generated using the `Link` component
 * * from the `atoms` directory.
 *
 * @param {Object} props
 *  The component props
 *
 * @param {Array} props.array
 *  The array of items to render in the list
 *
 * @param {Object} props.array[].item
 *  An item object with `name` & `url` properties
 *
 * @param {string} props.array[].item.name
 *  The name of the item
 *
 * @param {string} props.array[].item.url
 *  The URL of the item
 *
 * @return {JSX.Element}
 *  The rendered list component
 */
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
