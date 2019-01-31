import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {getList, addItem, deleteItem, editItem} from '../actions';

class List extends Component{
    formInput = React.createRef();
    editInput = React.createRef();

    state = {
        edit: false,
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
            alert('Please fill out the form before submitting');
            return;
        }
        this.props.addItem(item);
        event.currentTarget.reset();
        this.props.getList();
    }

    enableEdit = ()=>{
        this.setState({
            edit: true
        })
    }

    editItem = (event) => {
        event.preventDefault();
        const updatedValue = {
            name : this.editInput.current.value,
        }
        debugger;
        this.props.editItem(updatedValue);
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
                    <div>
                        <button className="edit" onClick={()=>this.editItem(i)}>edit</button> 
                        <button className="delete" onClick={()=>this.delete(i)}>delete</button> 
                    </div>
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
                    {/* {items} */}
                    {this.state.edit ? 
                        <form onSubmit={this.editItem}>
                            <input type="text" name="name" ref={this.editInput} />
                            <button className="edit-btn">Edit Item</button>
                        </form>
                        :
                        {items}
                        // <li ref={this.itemRef} key={item}>
                        //     {item}
                        //     <div>
                        //         <button className="edit" onClick={this.enableEdit}>edit</button> 
                        //         <button className="delete" onClick={()=>this.delete(i)}>delete</button> 
                        //     </div>
                        // </li>
                    }
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
    getList, addItem, editItem, deleteItem
})(List);