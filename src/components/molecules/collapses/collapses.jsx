import List from '../../atoms/list/list'
import Collapse from '../../atoms/collapse/collapse'

import './collapses.scss'

const Collapses = ({ list }) => {

  return (
    <List
      array={list.map((item) =>

        <Collapse
          title={item.title}
          content={item.content}
        />
      )}
    />
  )
}

export default Collapses
