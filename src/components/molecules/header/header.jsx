import { header } from '../../../assets/data.json'

import Icon from '../../atoms/icon/icon'
import List from '../../atoms/list/list'
import Title from '../../atoms/title/title'

import './header.scss'

/**
 * ? HEADER MOLECULE
 * * Renders the Header Molecule
 * * that displays the main information
 *
 * @return {JSX.Element}
 *  The rendered Header Molecule.
 */
const Header = () => {
  const { title, data } = header;

  return (
    <header id="intro">

      <Title
        heading={title.heading}
        subtitle={<strong>{title.subtitle}</strong>}
        prefix={

          <Icon
            name={title.icon.name}
            cat={title.icon.cat}
          />
        }
      />

      <List
        array={data.map((item) =>
          { item }
        )}
      />
    </header>
  )
}

export default Header
