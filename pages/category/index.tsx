import { GetStaticProps } from 'next'
import { ReactElement } from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/Category.module.css'
import categoryApi from '../../apis/categoryApi'
import { ICategoryItem } from '../../types/category'
import CategoryItem from '../../components/CategoryItem'

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { data } = await categoryApi.getAll()

    return {
      props: {
        categories: data,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

const CategoryPage = ({ categories }: { categories: ICategoryItem[] }) => {
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
      <h1 className={styles.title}>Browse</h1>
      <ul className={styles.list}>{renderCategoryItem()}</ul>
    </div>
  )
}

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default CategoryPage
