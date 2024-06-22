import { useState } from "react";

import Icon from "../../atoms/icon/icon";
import Title from "../../atoms/title/title";

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

  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <section className="collapse">

      <header
        onClick={toggleCollapse}
        className={isOpen ? 'isOpen' : 'isClosed'}
      >

        <Title
          heading={title.heading}
          prefix={

            <Icon
              name={title.icon.name}
              cat={title.icon.cat}
            />
          }
        />
      </header>

      {isOpen &&
        <aside className="translate">
          {content}
        </aside>
      }
    </section>
  )
}

export default Collapse
