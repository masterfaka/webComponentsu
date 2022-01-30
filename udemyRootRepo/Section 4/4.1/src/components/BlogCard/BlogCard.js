import React, { Component } from 'react';
import './BlogCard.css';

import BlogCardHeader from './BlogCardHeader/BlogCardHeader';
import BlogCardBody from './BlogCardBody/BlogCardBody';

class BlogCard extends Component {
    render() {
        return (
            <div className='BlogCard' onClick={() => this.props.clicked(this.props)}>
                <BlogCardHeader cover={this.props.cover} title={this.props.title} />
                <BlogCardBody author={this.props.author} synopsis={this.props.synopsis} />
            </div>
        )
    }
}

export default BlogCard;