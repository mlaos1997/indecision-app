
class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision App";
        const subTitle = "Put your life in the hands of a computer";
        const options = ['Code', 'More Code', 'Did I mention code?'];

        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}


class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What Should I do?</button>
            </div>
        );
    }
}

// Add remove all button
// Setup handleRemoveAll -> alert some message
// setup onClick to fire the method

class Options extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        console.log(this.props.options)
    }


    render() {
        return (
        <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
            {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
        </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
               Option: {this.props.optionText}
            </div>
        )
    }
}

// 1. Setup the form with text input and submit button
// 2. Wire up onSubmit
// 3. handleAddOption -> fetch the value typed -> if value, then alert
class AddOption extends React.Component {

    handleAddOption(e) {
        // Prevent refreshing of page
        e.preventDefault();
        // Grab Input Value
        const option = e.target.elements.option.value.trim();
        // If input has a vlaue, push value into option array, then empty text box
        if(option) {
            alert(option);
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));