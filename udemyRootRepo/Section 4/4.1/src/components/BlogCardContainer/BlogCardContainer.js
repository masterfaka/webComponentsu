import React, { Component } from 'react';
import './BlogCardContainer.css';

import BlogCard from './../BlogCard/BlogCard';

class BlogCardContainer extends Component {
    constructor(props) {
        super(props);
        this.blogModal = React.createRef(); 
        //we create reference on init so we can acces after render
    }

    state = {
        title: null,
        author: null,
        cover: null,
        synopsis: null,
        openModal: false
    }

    cardClickHandler = (event) => {
        let blogModal = this.blogModal.current;
        blogModal.setAttribute('open', 'true');
        this.setState({
            title: event.title,
            author: event.author,
            cover: event.cover,
            synopsis: event.synopsis,
            openModal: true
        })
    }

    render() {
        let blogs = this.props.blogs.map(blog => {
            return (
                <BlogCard 
                title={blog.title}
                author={blog.author}
                cover={blog.cover_photo || null}
                synopsis={blog.synopsis}
                key={blog.id}
                clicked={(props) => this.cardClickHandler(props)} />
            )
        })
        //check here invocation off web component
        return (
            <div className="BlogCardContainer">
                { blogs }
                <blog-modal
                 title={this.state.title}
                 author={this.state.author}
                 cover={this.state.cover}
                 synopsis={this.state.synopsis}
                 ref={this.blogModal}
                >
                </blog-modal>
            </div>
        )
    }
}

export default BlogCardContainer;