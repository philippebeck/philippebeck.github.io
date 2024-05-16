import { content, header } from '../../../assets/data.json'
import Title from '../../atoms/title/title'
import './header.css'

const Header = () => {

  return (
    <header id="intro">
      <Title 
        title={content.title} 
        lvl="1" 
        subtitle={<strong>{content.subtitle}</strong>}
      />

      <ul>
        { header.map((item, index) =>
          <li key={index}>
            {item}
          </li>
        )}
      </ul>
    </header>
  )
}

export default Header
