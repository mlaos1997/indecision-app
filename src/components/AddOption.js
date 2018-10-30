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
    };

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    };
}