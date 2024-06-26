import "./collapse.scss";

/**
 * ? COLLAPSE MOLECULE
 * * Renders the Collapse Molecule
 * * that displays the Title &
 * * that allows the user to expand
 * * or collapse the Content
 *
 * @param {Object} props
 *  The Properties for the Collapse Molecule.
 *
 * @param {Object} props.title
 *  The Title of the Collapse.
 * 
 * @param {HTMLElement|string} props.content
 *  The Content to be displayed
 *  when the Collapse is expanded.
 *
 * @return {JSX.Element}
 *  The rendered Collapse Molecule.
 */
const Collapse = ({ title, content }) => {

  return (
    <details className="collapse">
      <summary>{title}</summary>
      <figure>{content}</figure>
    </details>
  )
}

export default Collapse
