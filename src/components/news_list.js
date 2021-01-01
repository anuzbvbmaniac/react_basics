import React from 'react';

import NewsItem from "./news_list_item";

const NewList = (props) => {

    const news = props.news.map((item) => (
        <NewsItem item={item} key={item.id}/>
    ));

    return (
        <>
            {news}
        </>
    )
}

export default NewList;
