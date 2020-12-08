import Button from '../dist/src/components/Button'; // Built Components
import Layout from '../src/layouts/Main';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
      <Layout
        title="About - Nexter"
        footer={`Copyright ${new Date().getFullYear()}`}
      >
          <h1 className={styles.title}>
             About <a href="/">Nexter</a>
         </h1>
         <p>
           Built using:
          </p>
            <ul>
              <li>Next.JS</li>
              <li>Tailwind CSS</li>
            </ul>

         <Button variant="info" size="lg" label="Know More" />
      </Layout>
  )
}
