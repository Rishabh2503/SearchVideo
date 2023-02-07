import React from "react";
class SearchBar extends React.Component{
    state = {term : ''};
    onInputChange = event => {
     this.setState({term:event.target.value})
    }
    onFormSubit = event =>{
        event.preventDefault();
        //todo : make sure we call
        // call back from parent component
        this.props.onFormSubmit(this.state.term)
    }
    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubit} className="ui form">
                <div className="field">
                <label>
                    Video Search
                </label>
                <input type="text" 
                value={this.state.term}
                onChange={this.onInputChange} />
                </div>    
                </form>
            </div>
        )
    }

}
export default SearchBar;