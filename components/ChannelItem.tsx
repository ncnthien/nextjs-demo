import { IChannelItem } from '../types/channel'
import styles from '../styles/ChannelItem.module.css'
import Image from 'next/image'
import Link from 'next/link'

const ChannelItem: React.FC<IChannelItem> = ({
  id,
  name,
  avatar,
  title,
  categoryName,
  categoryId,
  language,
  img,
  view,
}) => {
  return (
    <div className={styles.channelContainer}>
      <Link href={`http://localhost:3000/${id}`} passHref>
        <div className={styles.channelItem}>
          <div className={styles.container}>
            <div className={styles.imgContainer}>
              <div className={styles.overlay}>
                <p>{view} viewers</p>
              </div>
              <Image src={img} alt={title} layout='fill' />
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.contentLeft}>
                <div className={styles.imgWrapper}>
                  <Image src={avatar} alt={name} layout='fill' />
                </div>
              </div>
              <div className={styles.contentRight}>
                <div className={styles.rightWrapper}>
                  <p className={styles.title}>{title}</p>
                  <p className={styles.name}>{name}</p>
                  <p className={styles.categoryName}>{categoryName}</p>
                  <p className={styles.language}>{language}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className={styles.live}>LIVE</div>
    </div>
  )
}

export default ChannelItem
