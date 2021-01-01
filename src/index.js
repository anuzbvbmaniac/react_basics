import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import DB from './db.json';

import Header from "./components/header";
import NewList from "./components/news_list";
import Footer from "./components/footer";


import './styles/style.css'
import Lifecycle from "./components/lifecycle";

class App extends Component {

    state = {
        news: DB,
        filteredNews: DB,
        footerText: 'I am a happy footer.'
    }

    getKeyWords = (event) => {
        let keywords = event.target.value;
        let filteredNews = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1;
        });

        this.setState({
            filteredNews
        });
    }

    render() {

        const { footerText, filteredNews } = this.state

        return (
            <>
                <Header
                    keywords={this.getKeyWords}
                />
                <NewList
                    news={filteredNews}
                />
                <Footer footerText={footerText}/>
                <Lifecycle/>
            </>
        );
    }

}

ReactDOM.render(<App/>, document.getElementById('root'));
