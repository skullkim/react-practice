import React from 'react';
import Categories from "../Components/Categories";
import NewsList from "../Components/NewsList";

const NewsPage = ({match}) => {
    const category = match.params.category || 'all';


    return (
        <div>
            <Categories/>
            <NewsList category={category}/>
        </div>
    );
}

export default NewsPage;