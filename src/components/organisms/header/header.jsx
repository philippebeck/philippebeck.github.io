import { header } from '../../../assets/data.json'

import Icon from '../../atoms/icon/icon'
import Title from '../../atoms/title/title'

import './header.scss'

/**
 * ? HEADER COMPONENT
 * * Renders the Header component.
 *
 * @return {JSX.Element}
 *  The rendered Header component.
 */
const Header = () => {
  return (

    <header id="intro">
      <Title
        heading={header.title.heading}
        subtitle={
          <strong>{header.title.subtitle}</strong>
        }
        prefix={
          <Icon
            name={header.title.icon.name}
            cat={header.title.icon.cat}
          />
        }
      />

      <ul>
        {header.data.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    </header>
  )
}

export default Header
