import List from '../../atoms/list/list'
import Link from '../../atoms/link/link'

import './links.scss'

const Links = ({ array }) => {

  return (
    <List
      array={array.map((item) =>

        <Link
          url={item.url}
          label={item.text}
          title={item.title}
          content={item.content}
          design={item.design}
        />
      )}
    />
  )
}

export default Links
