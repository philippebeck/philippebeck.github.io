import { useState } from "react";

import Title from "../../molecules/title/title";

import "./collapse.scss";

/**
 * ? COLLAPSE
 * * Renders a collapsible section with a title & a content.
 *
 * @param {Object} props - The properties for the collapse.
 *
 * @param {string} props.title - The title of the collapse.
 * @param {string} props.content - The content to be displayed
 *  when the collapse is expanded.
 *
 * @return {JSX.Element} - The rendered collapse component.
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
          icon={title.icon}
        />
      </header>

      { isOpen &&
        <aside className="translate">
          { content }
        </aside>
      }
    </section>
  )
}

export default Collapse
