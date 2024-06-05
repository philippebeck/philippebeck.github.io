import "./title.scss"

const Title = ({ title, lvl="2", subtitle="" }) => {
  return (

    <hgroup>
      {
        lvl === "1" ? <h1>{title}</h1> :
        lvl === "2" ? <h2>{title}</h2> :
        lvl === "3" ? <h3>{title}</h3> :
        <h4>{title}</h4>
      }
      {
        subtitle && <p>{subtitle}</p>
      }
    </hgroup>
  )
}

export default Title
