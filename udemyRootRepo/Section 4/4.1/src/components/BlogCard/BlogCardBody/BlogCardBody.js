import React from 'react';
import './BlogCardBody.css';

function BlogCardBody(props) {
    return (
        <div className='BlogBody'>
            <span className='AuthorName'>{props.author}</span>
            <div className='Synopsis'>
                {props.synopsis}
            </div>
        </div>
    )
}

export default BlogCardBody;