import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({category}) => {
    const [articles, setArticles] = useState(null);
    //API요청이 대기 중인지 판별
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try{
                const query = category === 'all' ? '' : `&category=${category}`;
                const res = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${process.env.REACT_APP_API_KEY}`
                );
                setArticles(res.data.articles);
            }
            catch(err) {
                console.error(err);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if(loading) {
        return <NewsList>Loading...</NewsList>
    }

    if(!articles){
        return null;
    }

    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    );
};

export default NewsList;