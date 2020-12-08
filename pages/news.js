import Router from 'next/router';
import { useState } from 'react';
import Button from '../src/components/Button';
import Layout from '../src/layouts/Main';
import styles from '../styles/Home.module.css';

const News = ({news}) => {

    const [searchQuery, setSearchQuery] = useState('nextjs');

    const handleSearchQry = e => {
        setSearchQuery(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        Router.push(`/news/?searchTerm=${searchQuery}`)
    }

  return (
      <Layout
        title="News - Nexter"
        footer={`Copyright ${new Date().getFullYear()}`}
      >
          <div>
            <h1 className={styles.title}> Latest <a href="/news">News</a> </h1>
            <p className={styles.description}>Updates from Hackernews</p>
            <hr />Search News
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchQuery} placeholder="Search..." onChange={handleSearchQry} />
                <Button variant="dark" size="sm" label="Search" />
            </form>
            <hr />
            <div>
            {/* {JSON.stringify(news)} */}
            {news.map((n,i) => (
                <p key={i}>
                   <a href={n.url} target="_blank">{n.title}</a>
                </p>
            ))}
            </div>
         </div>

      </Layout>
  )
}

News.getInitialProps = async ({query}) => {
    let news;
    try{
        const resp = await fetch(`https://hn.algolia.com/api/v1/search?query=${query.searchTerm}`);
        news = await resp.json();
    }catch(err){
        console.log("Error", err);
        news = [];
    }

    return {
        news: news.hits
    };
}

export default News;
