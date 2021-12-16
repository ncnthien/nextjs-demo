import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/CategoryItem.module.css'
import { ICategoryItem } from '../types/category'

const CategoryItem: React.FC<ICategoryItem> = ({
  id,
  name,
  view,
  type,
  img,
}) => {
  return (
    <div className={styles.container}>
      <Link href={`http://localhost:3000/category/${id}`} passHref>
        <div className={styles.link}>
          <div className={styles.imageContainer}>
            <Image src={img} alt={img} layout='fill' />
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.name}>{name}</p>
            <p className={styles.view}>{view} viewers</p>
            <div>
              {type.map((item) => (
                <span key={item} className={styles.type}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CategoryItem
