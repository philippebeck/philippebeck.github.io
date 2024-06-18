import { footer } from '../../../assets/data.json'

import './footer.scss'

import Icon from '../../atoms/icon/icon'
import Link from '../../atoms/link/link'

/**
 * ? FOOTER COMPONENT
 * * Renders the Footer component.
 *
 * @return {JSX.Element}
 *  The rendered Footer component.
 */
const Footer = () => {
  return (

    <footer>
      <ul>
        { footer.map((item, index) =>
          <li key={index}>

            <Link
              url={item.url} 
              label={item.name}
              content={

                <Icon
                  cat="brands"
                  isHidden="false"
                  option="1x"
                  name={item.icon}
                />}
            />
          </li>
        )}
      </ul>
    </footer>
  )
}

export default Footer
