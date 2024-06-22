import { footer } from '../../../assets/data.json'

import Icon from '../../atoms/icon/icon'
import List from '../../atoms/list/list'
import Link from '../../atoms/link/link'

import './footer.scss'

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

      <List
        array={footer.map((item) =>

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
        )}
      />
    </footer>
  )
}

export default Footer
