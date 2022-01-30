import React, { Component } from 'react';
import './AddBlog.css';

import InputText from './../../common/InputText/InputText';

class AddBlog extends Component {
    state = {
        formElements: {
            title: {
                type: 'text',
                label: 'Title',
                value: '',
                id: 'title'
            },
            author: {
                type: 'text',
                label: 'Author',
                value: '',
                id: 'author'
            },
            cover: {
                type: 'text',
                label: 'Cover Photo',
                value: '',
                id: 'cover'
            },
            content: {
                type: 'textarea',
                label: 'Content',
                value: '',
                id: 'content'
            }
        }
    }

    inputChangeHandler = (event) => {
        console.log(event.target.value);
        let formElements = this.state.formElements;
        formElements[event.target.id].value = event.target.value;
        this.setState({
            formElements: formElements
        })
    }

    render() {
        let formElements = Object.keys(this.state.formElements).map(key => {
            let element = this.state.formElements[key];
            return <InputText type={element.type} label={element.label} key={element.id} id={element.id} changed={this.inputChangeHandler} value={element.value} />
        })

        return (
            <div className='AddBlog'>
                <h3>Create a new post</h3>
                { formElements }
                <button className='Submit' onClick={() => this.props.clicked(this.state.formElements)}>Submit</button>
            </div>
        )
    }
}

export default AddBlog;