import Layout from '../src/layouts/Main';
import styles from '../styles/Home.module.css';

export default function Products() {
  return (
      <Layout
        title="Products - Nexter"
        footer={`Copyright ${new Date().getFullYear()}`}
      >
          <h1 className={styles.title}>
            Products <a href="/">Nexter</a>
         </h1>
      </Layout>
  )
}
