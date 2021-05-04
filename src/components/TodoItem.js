import React, { Component } from 'react'
import PropTypes from "prop-types";


export class TodoItem extends Component {

    getStyle = () => {
      /*  if (this.props.todo.completed) {
            return {
                textDecoration: 'line-through',
            }
        } else {
            return {
                textDecoration: 'none',
            }
        } */

        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    }

   /* markComplete = (e) => {
        console.log(this.props) //when onChange = {this.markComplete}
    }*/

    render() {

        const {id, title} = this.props.todo;

        return (

           

            //<div style={ { backgroundColor:"#f4f4f4" } }>
           // <div style={ itemStyle }>
            <div style={ this.getStyle() }>
            {/* <p>{ this.props.todo.id }</p> */}
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> 
                    {'   '}

                        { title }
                        {'        '}

                        <button onClick={this.props.delTodo.bind(this, id)} style={ { backgroundColor:"#f00", color: '#fff', borderRadius: '50%' } } >x</button>
                    </p>
                    


                    {/* { this.props.todo.title } */}
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

/*const itemStyle = { 
    backgroundColor:"#f4f4f4" 
}*/

export default TodoItem
