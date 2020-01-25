import React, { Component } from 'react'

export class Submit extends Component {

    state = {
        Title:'',
    }

    onChange = (e) =>{
            this.setState({[e.target.name] : e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.Submit(this.state.Title);
        this.setState({Title: ''});
        
    }

    render() {
        return (
            <div>
                <input name='Title' value={this.state.Title} style={txtStyle} type='text' placeholder="enter something you need to do..." onChange={this.onChange}></input>   
                <input type='submit' style={subStyle} onClick={this.onSubmit}></input>   
            </div>
        )
    }
}

const txtStyle = {
    width:'20rem',
    height:'2rem',
    border:'2px black solid',
}

const subStyle = {
    width:'10rem',
    height:'2.4rem',
    border:'2px black solid'
}

export default Submit
