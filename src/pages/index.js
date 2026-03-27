import clsx from 'clsx';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const features = [
  {
    title: 'Structured Spark Apps',
    description:
      'Use SparkApp to standardize config loading, SparkSession creation, logging, and shutdown for batch applications.',
  },
  {
    title: 'Typed YAML Config',
    description:
      'Keep application configuration in YAML and decode it into Scala case classes with strict field validation.',
  },
  {
    title: 'Useful DataFrame Helpers',
    description:
      'Layer in DataFrame utility methods without turning your jobs into a pile of ad hoc helper objects.',
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <p className={styles.kicker}>A Lightning fast Apache Spark Framework</p>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.heroActions}>
          <Link className="button button--primary button--lg" to="/docs/getting-started">
            Read the Docs
          </Link>
          <Link className="button button--secondary button--lg" to="/use-cases">
            See Usecases
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main className={styles.mainSection}>
        <section className="container">
          <div className="row">
            {features.map((feature) => (
              <Feature key={feature.title} {...feature} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
