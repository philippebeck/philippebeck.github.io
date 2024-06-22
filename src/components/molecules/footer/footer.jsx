import { footer } from '../../../assets/data.json'

import './footer.scss'

import Icon from '../../atoms/icon/icon'
import Link from '../../atoms/link/link'

/**
 * ? FOOTER MOLECULE
 * * Renders the Footer Molecule
 * * that displays a list of social links
 *
 * @return {JSX.Element}
 *  The rendered Footer Molecule.
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
                  name={item.icon}
                  option="1x"
                  isHidden="false"
                />}
            />
          </li>
        )}
      </ul>
    </footer>
  )
}

export default Footer
