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
  const { title, data } = header;

  return (
    <header id="intro">

      <Title
        heading={title.heading}
        subtitle={
          <strong>{title.subtitle}</strong>
        }
        prefix={

          <Icon
            name={title.icon.name}
            cat={title.icon.cat}
          />
        }
      />

      <ul>
        {data.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    </header>
  )
}

export default Header
