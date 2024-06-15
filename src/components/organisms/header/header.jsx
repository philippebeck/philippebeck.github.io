import { content, header } from '../../../assets/data.json'

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
        heading={content.header.heading}
        icon={content.header.icon}
        subtitle={<strong>{content.header.subtitle}</strong>}
      />

      <ul>
        { header.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    </header>
  )
}

export default Header
