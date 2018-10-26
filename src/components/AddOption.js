import React from 'react';

export default class AddOption extends React.Component {

    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        // Prevent refreshing of page
        e.preventDefault();
        // Grab Input Value
        const option = e.target.elements.option.value.trim();
        // If input has a vlaue, push value into option array, then empty text box
        const error = this.props.handleAddOption(option);  
        
        this.setState(() => ({ error }));
       
        if (!error) { 
            e.target.elements.option.value = '' 
        }

    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}