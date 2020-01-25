import React, { Component } from 'react';
import propTypes from 'prop-types';

export class TodoItem extends Component {


        getStyle = () =>{
           
            return {
                backgroundColor: '#f5f5f5',
                display: 'flex',
                padding: '10px',
                textAlign: 'center',
                alignItems:'center',
                justifyContent: 'center',
                border: '1px #000 solid',
                textDecoration: this.props.todo.completed ? 'line-through' : 'none'
            }
        }
            render() {
                const {id, title} = this.props.todo;  
                return (
                    <div style={this.getStyle()}>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    <h3>{title}</h3>  
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                    </div>
                )
            }
     }

//prop types
TodoItem.propTypes = {
    todo: propTypes.object.isRequired
}

const btnStyle = {
    backgroundColor: 'red',
    borderRadius: '50%',
    color: 'white'
}



export default TodoItem
