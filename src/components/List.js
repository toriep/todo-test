import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getList, addItem, deleteItem} from '../actions';

class List extends Component{
    formInput = React.createRef();
    itemRef = React.createRef();

    state = {
        emptyValue: false
    }

    componentDidMount(){
        this.props.getList()
    }

    submitItem = (event) => {
        event.preventDefault();
        const item = {
            name : this.formInput.current.value,
        }
        if(!item.name){
            console.log('Please fill out the form before submitting');
            this.setState({
                emptyValue: true,
            })
            return;
        }
        this.setState({
            emptyValue: false,
        })
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
                <div  key={i} className="item">
                    <li ref={this.itemRef}>
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
                <div className="info-box">
                    {this.state.emptyValue ? <span className="inform">Please fill out the form to add an item</span> : null}
                </div>
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