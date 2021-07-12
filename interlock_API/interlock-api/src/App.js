import logo from './logo.svg';
import './App.css';
import React, {useState, useCallback} from 'react';
import {Route} from 'react-router-dom';
import NewsPage from "./Pages/NewsPage";
import axios from 'axios';
import NewsItem from "./Components/NewsItem";
import NewsList from "./Components/NewsList";
import Categories from "./Components/Categories";

function App() {
    return (
       // ?는 해당 경로가 선택적이라는 의미, 있으면 /category, 없으면 전체 카테고리
       <Route path={"/:category?"} component={NewsPage}/>
    );
}

export default App;
