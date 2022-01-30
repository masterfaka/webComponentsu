import React from 'react';
import './BlogCardHeader.css';

function BlogCardHeader(props) {
    return (
        <div className='BlogHeader'>
            <img src={props.cover} alt={props.title} />
            <span className='TitleText'>{props.title}</span>
        </div>
    )
}

export default BlogCardHeader;