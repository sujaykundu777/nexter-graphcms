import Button from '../dist/src/components/Button'; // Built Components
import Layout from '../src/layouts/Main';
import styles from '../styles/Home.module.css';

export default function Contact() {
  return (
      <Layout
          title="Contact - Nexter"
          footer={`Copyright ${new Date().getFullYear()}`}
      >
          <h1 className={styles.title}>
            Contact <a href="/">Nexter</a>
         </h1>
         <Button variant="primary" size="lg" label="Contact Me"/>
      </Layout>
  )
}
