import Header from './Header'
import styles from '../styles/Layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.contentContainer}>{children}</div>
    </div>
  )
}

export default Layout
