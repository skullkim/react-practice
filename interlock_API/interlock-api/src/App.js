import logo from './logo.svg';
import './App.css';
import React, {useState, useCallback} from 'react';
import axios from 'axios';
import NewsItem from "./Components/NewsItem";
import NewsList from "./Components/NewsList";
import Categories from "./Components/Categories";

function App() {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback((category) => {
        setCategory(category);
    }, []);
    return (
      <div>
          <Categories category={category} onSelect={onSelect}/>
          <NewsList category={category}/>
      </div>
    );
}

export default App;
