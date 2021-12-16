import { GetStaticProps } from 'next'
import Link from 'next/link'
import { ReactElement } from 'react'
import categoryApi from '../apis/categoryApi'
import channelApi from '../apis/channelApi'
import CategoryItem from '../components/CategoryItem'
import ChannelItem from '../components/ChannelItem'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { ICategoryItem } from '../types/category'
import { IChannelItem } from '../types/channel'

export const getStaticProps: GetStaticProps = async () => {
  const defaultChannelLimit = 6
  const defaultategoryLimit = 4

  try {
    const [{ data: channels }, { data: categories }] = await Promise.all([
      channelApi.getAll({
        limit: defaultChannelLimit,
      }),
      categoryApi.getAll({
        limit: defaultategoryLimit,
      }),
    ])

    return {
      props: {
        channels,
        categories,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

const Home = ({
  channels,
  categories,
}: {
  channels: IChannelItem[]
  categories: ICategoryItem[]
}) => {
  const renderChannels = (): JSX.Element[] => {
    return channels.map((channel) => (
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

  const renderCategoryItem = (): JSX.Element[] => {
    return categories.map((category) => (
      <CategoryItem
        key={category.id}
        id={category.id}
        name={category.name}
        img={category.img}
        view={category.view}
        type={category.type}
      />
    ))
  }

  return (
    <div>
      <h1 className={styles.title}>Welcome to Twitch!</h1>
      <div className={styles.section}>
        <p className={styles.sectionTitle}>
          live channels we think you&apos;ll like
        </p>
        <div className={styles.list}>{renderChannels()}</div>
      </div>
      <div className={styles.section}>
        <p className={styles.sectionTitle}>
          <Link href='/category'>
            <a>categories</a>
          </Link>{' '}
          we think you&apos;ll like
        </p>
        <div className={styles.list}>{renderCategoryItem()}</div>
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
