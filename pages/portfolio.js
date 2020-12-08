import Layout from '../src/layouts/Main';
import styles from '../styles/Home.module.css';

export default function Portfolio() {
  return (
      <Layout
        title="Portfolio - Nexter"
        footer={`Copyright ${new Date().getFullYear()}`}
      >
          <h1 className={styles.title}>
            Portfolio <a href="/">Nexter</a>
         </h1>
      </Layout>
  )
}
