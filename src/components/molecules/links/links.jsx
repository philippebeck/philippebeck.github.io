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
 * 
 * @param {string} props.array.name
 *  The name of the link item.
 * @param {string} props.array.url
 *  The URL of the link item.
 *@param {string} props.array.detail
 *  The detail text of the link item.
 * @param {string} props.array.caption
 *  The caption object of the link item.
 * 
 * @param {string} props.array.caption.title
 *  The title of the caption of the link item.
 * @param {Array} props.array.caption.technos
 *  The array of technos of the caption of the link item.
 *
 * @return {JSX.Element}
 *  JSX element representing the list of links
 */
const Links = ({ array }) => {

  return (
    <List
      array={array.map((item) =>
      (
        item.name
          ?
          <Link
            url={item.url}
            content={item.name}
            design="btn"
          />
          :
          item.caption.technos
            ?
            <Link
              url={item.url}
              title={item.detail}
              content={

                <Card
                  caption={
                    <>
                      <Title heading={item.caption.title} />
                      <List
                        array={item.caption.technos.map((techno) =>
                          <Icon
                            name={techno}
                            option="lg"
                            isHidden="false"
                          />
                        )}
                      />
                    </>
                  }
                  content={
                    <Image
                      url={item.image.url}
                      alt={item.image.alt}
                    />
                  }
                />
              }
            />
            :
            <Link
              url={item.url}
              title={item.detail}
              content={

                <Card
                  caption={<Title heading={item.caption.title} />}
                  content={
                    <Image
                      url={item.image.url}
                      alt={item.image.alt}
                    />
                  }
                />
              }
            />
      )
      )}
    />
  )
}

export default Links
