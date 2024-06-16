import { header } from '../../../assets/data.json'

import Title from '../../molecules/title/title'

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
        icon={header.title.icon}
        subtitle={<strong>{header.title.subtitle}</strong>}
      />

      <ul>
        { header.data.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    </header>
  )
}

export default Header
