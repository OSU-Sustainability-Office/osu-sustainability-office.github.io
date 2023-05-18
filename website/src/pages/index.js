import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <a href="/docs/index">Check our guides here!</a>,
    imageUrl:
      '../static/img/osu_so.png',
  },
];

function Feature({ imageUrl, title }) {
  const imgUrl = useBaseUrl(imageUrl);

  return (
    <center>
      <div className={clsx('col col--4', styles.feature)}>
        {imgUrl && (
          <div className="text--center">
            <img src={imgUrl} alt={title} />
          </div>
        )}
        <h3 className="h3margin">{title}</h3>
      </div>
    </center>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title="Home" description="OSU SO Documentation">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">OSU SO Documentation</p>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
