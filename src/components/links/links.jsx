import { Card, Icon, Image, List, Link, Title } from 'reactoms'
import './links.scss'

/**
 * ? LINKS MOLECULE
 * * Renders the Links Molecule that displays
 * * a list of links based on the provided array data.
 *
 * @param {Object} props - The Properties for the Links Molecule.
 * @param {Array} props.array - The array of data containing information for each link item.
 * @param {string} props.array.url - The URL of the Link.
 * @param {string} props.array.name - The Name of the Link.
 * @param {string} props.array.detail - The Detail of the Link.
 * @param {Object} props.array.caption - The Caption of the Link.
 * @param {string} props.array.caption.title - The Caption Title of the Link.
 * @param {Array} props.array.caption.technos - The Caption Technologies of the Link.
 * @param {Object} props.array.image - The Image of the Link.
 * @param {string} props.array.image.url - The Image URL of the Link.
 * @param {string} props.array.image.alt - The Image Alternative Text of the Link.
 *
 * @return {JSX.Element} - JSX element representing the list of links
 */
const Links = ({ array }) => {

  const renderLink = (item, index) => {

    const linkProps = {
      url: item.url,
      title: item.detail || null,
      content: (
        <Card
          caption={item.caption && <Title txt={item.caption.title} />}
          content={item.image && <Image url={item.image.url} alt={item.image.alt} />}
        />
      )
    };

    if (item.name) {
      linkProps.content = item.name;
      linkProps.design = 'btn';

    } else if (item.caption && item.caption.technos) {
      linkProps.content = (
        <Card
          caption={
            <>
              <Title txt={item.caption.title} />
              <List
                array={item.caption.technos.map((techno) => 
                  <Icon name={techno} option="lg" isHidden="false" />
                )}
              />
            </>
          }
          content={<Image url={item.image.url} alt={item.image.alt} />}
        />
      );
    }

    return <Link key={index} {...linkProps} />;
  };

  return <List array={array.map(renderLink)} />;
};

export default Links
