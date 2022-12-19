import { Component } from 'react';
import schedule from './schedule.png'

export class ToDoList extends Component {
    state = {
        userInput: '',
        todoList: []
    }

    

    onChangeEvent(e) {
        this.setState({userInput: e})
        console.log(e)
    }

    addItem(input) {
        if (input === '') {
            alert ("Please enter an item")
        } else {
        let listArray = this.state.todoList;
        listArray.push(input);
        this.setState({todoList: listArray, userInput: ''})
        }
    }

    deleteItem() {
        let listArray = this.state.todoList;
        listArray = [];
        this.setState({todoList: listArray});
        const choc = document.querySelector(".prize");
        choc.style.display = "flex"
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    

    onFormSubmit(e) {
        e.preventDefault();
    }
    render() {
        return( <div>
            <form onSubmit={this.onFormSubmit}>

            <div className='container'>
                <input type='text' placeholder='Input your plan and press Enter'
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>

            <div className='container'>
                <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
            </div>

            <div className='container'>
            <ul>
                {this.state.todoList.map((item, index) => (
                    <li onClick={this.crossedWord} className='li' key={index}> 
                    <img src={schedule} width="30 %" alt="check" /> {item}
                    </li>
                    
                ))}
            </ul>
            </div>

            <div className='container'>
                <button onClick={() => this.deleteItem()} className="btn delete">Delete</button> 
            </div>
           
            </form>
            </div>
        )
    }
}