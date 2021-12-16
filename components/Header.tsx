import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div>
        <div className={styles.headerLeft}>
          <Link href='/'>
            <a>
              <svg
                type='color-fill-brand'
                width='32px'
                height='32px'
                version='1.1'
                viewBox='0 0 24 28'
                x='0px'
                y='0px'
                className={styles.logo}
              >
                <g fillRule='evenodd'>
                  <path d='M19 6v6h-2V6h2zm-7 0h2v6h-2V6zM5 0L0 5v18h6v5l5-5h4l9-9V0H5zm17 13l-4 4h-4l-4 4v-4H6V2h16v11z'></path>
                  <path
                    d='M18 17l4-4V2H6v15h4v4l4-4h4zM12 6h2v6h-2V6zm7 0h-2v6h2V6z'
                    fill='#FFF'
                  ></path>
                </g>
              </svg>
            </a>
          </Link>
          <Link href='/category'>
            <a>
              <svg
                width='100%'
                height='100%'
                version='1.1'
                viewBox='0 0 20 20'
                x='0px'
                y='0px'
                className={styles.category}
              >
                <g>
                  <path d='M5 2a2 2 0 00-2 2v8a2 2 0 002 2V4h8a2 2 0 00-2-2H5z'></path>
                  <path
                    fillRule='evenodd'
                    d='M7 8a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2V8zm2 0h6v8H9V8z'
                    clipRule='evenodd'
                  ></path>
                </g>
              </svg>
            </a>
          </Link>
        </div>
        <div className={styles.headerRight}>
          <Link href='/search'>
            <a>
              <svg
                width='100%'
                height='100%'
                version='1.1'
                viewBox='0 0 20 20'
                x='0px'
                y='0px'
                className={styles.search}
              >
                <g>
                  <path
                    fillRule='evenodd'
                    d='M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z'
                    clipRule='evenodd'
                  ></path>
                </g>
              </svg>
            </a>
          </Link>
          <button className={styles.menuButton}>
            <svg
              width='100%'
              height='100%'
              version='1.1'
              viewBox='0 0 20 20'
              x='0px'
              y='0px'
              className={styles.menu}
            >
              <g>
                <path d='M10 18a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM8 4a2 2 0 104 0 2 2 0 00-4 0z'></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
