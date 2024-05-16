import "./title.css"

const Title = ({ title, lvl="2", subtitle="" }) => {

  return (
    <hgroup>
      {
        lvl === "1" ? <h1>{title}</h1> :
        lvl === "2" ? <h2>{title}</h2> :
        lvl === "3" ? <h3>{title}</h3> :
        lvl === "4" ? <h4>{title}</h4> :
        lvl === "5" ? <h5>{title}</h5> :
        <h6>{title}</h6> 
      }
      {
        subtitle && <p>{subtitle}</p>
      }
    </hgroup>
  )
}

export default Title
