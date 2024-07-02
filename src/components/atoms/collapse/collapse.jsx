import "./collapse.scss";

/**
 * ? COLLAPSE ATOM
 * * Renders the Collapse Atom that displays the Title &
 * * that allows the user to expand or collapse the Content
 *
 * @param {Object} props - The Properties for the Collapse Atom.
 * @param {Object} props.title - The Title of the Collapse.
 * @param {HTMLElement|string} props.content - The Content of the Collapse.
 *
 * @return {JSX.Element} - The rendered Collapse Atom.
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
