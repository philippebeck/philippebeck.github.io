import Card from '../../atoms/card/card'
import Icon from '../../atoms/icon/icon'
import Image from '../../atoms/image/image'
import List from '../../atoms/list/list'
import Link from '../../atoms/link/link'
import Title from '../../atoms/title/title'

import './links.scss'

const Links = ({ array }) => {
  console.log(array);

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
