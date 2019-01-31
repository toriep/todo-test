import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {getList, addItem, deleteItem} from '../actions';

class List extends Component{
    formInput = React.createRef();
    itemRef = React.createRef();

    componentDidMount(){
        this.props.getList()
    }

    submitItem = (event) => {
        event.preventDefault();
        const item = {
            name : this.formInput.current.value,
        }
        this.props.addItem(item);
        event.currentTarget.reset();
        this.props.getList();
    }

    delete = (i) => {
        this.props.deleteItem(i)
    }

    render(){
        const { list : {list} } = this.props;
        const items = list.map((item,i) =>{
            return(
                <div className="item">
                    <li ref={this.itemRef} key={item}>
                    {item} 
                    </li>
                    <button className="delete" onClick={()=>this.delete(i)}>delete</button> 
                </div>
            )
        })
        return(
            <div className="container">
                <h1>To Do List</h1>
                <form onSubmit={this.submitItem}>
                    <input type="text" name="name" ref={this.formInput} />
                    <button className="submit-btn">Add Item</button>
                </form>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    };
}

export default connect(mapStateToProps,{
    getList, addItem, deleteItem
})(List);