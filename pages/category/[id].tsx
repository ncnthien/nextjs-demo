import { GetStaticPaths } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'
import categoryApi from '../../apis/categoryApi'
import channelApi from '../../apis/channelApi'
import ChannelItem from '../../components/ChannelItem'
import Layout from '../../components/Layout'
import styles from '../../styles/CategoryDetailPage.module.css'
import { ICategoryItem } from '../../types/category'
import { IChannelItem } from '../../types/channel'

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await categoryApi.getAll()
  return {
    paths: data.map((category) => ({
      params: {
        id: category.id,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({
  params,
}: {
  params: { id: string }
}) => {
  try {
    const [{ data: category }, { data: channels }] = await Promise.all([
      categoryApi.get(params.id),
      channelApi.getOnCategory(params.id),
    ])

    return {
      props: {
        category,
        channels,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

const CategoryDetailPage = ({
  category,
  channels,
}: {
  category: ICategoryItem
  channels: IChannelItem[]
}) => {
  const renderChannels = (): JSX.Element[] => {
    return channels.map((channel, index) => (
      <ChannelItem
        key={channel.id}
        id={channel.id}
        name={channel.name}
        avatar={channel.avatar}
        title={channel.title}
        categoryName={channel.categoryName}
        categoryId={channel.categoryId}
        language={channel.language}
        img={channel.img}
        view={channel.view}
      />
    ))
  }

  return (
    <div>
      <div className={styles.intro}>
        <Link href={`http://localhost:3000/category/${category.id}`} passHref>
          <div className={styles.introContainer}>
            <div className={styles.imageContainer}>
              <Image src={category.img} alt={category.name} layout='fill' />
            </div>
            <div className={styles.categoryContainer}>
              <p className={styles.categoryName}>{category.name}</p>
              <p className={styles.categoryView}>
                {category.view} <span>Viewers</span>
              </p>
              <div className={styles.categoryType}>
                {category.type.map((item) => (
                  <span key={item} className={styles.type}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      </div>
      <ul className={styles.channelList}>{renderChannels()}</ul>
    </div>
  )
}

CategoryDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default CategoryDetailPage
