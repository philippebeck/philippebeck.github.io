import Card from '../../atoms/card/card'
import Icon from '../../atoms/icon/icon'
import Image from '../../atoms/image/image'
import List from '../../atoms/list/list'
import Link from '../../atoms/link/link'
import Title from '../../atoms/title/title'

import './links.scss'

/**
 * ? LINKS MOLECULE
 * * Renders the Links Molecule
 * * that displays a list of links
 * * based on the provided array data.
 *
 * @param {Object} props
 *  The Properties for the Links Molecule.
 *
 * @param {Array} props.array
 *  The array of data containing information for each link item.
 * @param {string} props.array.url
 *  The URL of the link.
 * @param {string} props.array.name
 *  The name of the link.
 * @param {string} props.array.detail
 *  The detail of the link.
 *
 * @param {Object} props.array.caption
 *  The caption of the link.
 * @param {string} props.array.caption.title
 *  The title of the caption.
 * @param {Array} props.array.caption.technos
 *  The technologies used in the caption.
 * 
 * @param {Object} props.array.image
 *  The image of the link.
 * @param {string} props.array.image.url
 *  The URL of the image.
 * @param {string} props.array.image.alt
 *  The alternative text of the image.
 *
 * @return {JSX.Element}
 *  JSX element representing the list of links
 */
const Links = ({ array }) => {

  const renderLink = (item, index) => {

    const linkProps = {
      url: item.url,
      title: item.detail || null,
      content: (
        <Card
          caption={item.caption && <Title heading={item.caption.title} />}
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
              <Title heading={item.caption.title} />
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
