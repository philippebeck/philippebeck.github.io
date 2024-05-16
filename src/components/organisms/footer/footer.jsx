import { footer } from '../../../assets/data.json'
import './footer.css'

import Icon from '../../atoms/icon/icon'
import Link from '../../atoms/link/link'

const Footer = () => {

  return (
    <footer>
      <ul>
        { footer.map((item, index) =>
          <li key={index}>
            <Link
              url={item.url} 
              label={item.name}
              content={<Icon cat="brands" name={item.icon} />}
            />
          </li>
        )}
      </ul>
    </footer>
  )
}

export default Footer
