import './icon.css'

const Icon = ({cat, name, size="2"}) => {

  return (
    <i className={`fa-${cat} fa-${name} fa-${size}x fa-fw`}></i>
  )
}

export default Icon
