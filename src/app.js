console.log('app running')

// only render subtitle and p tag is subtitle exists 
// render a new p tag - if options.length > 0 'here are your options' or 'no opttions'

const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: ['Work', 'Jack Off', 'Workout']
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

// create remove all button above list
// on Click -> wipe array -> rerender
const onRemoveAll = () => {
    app.options = [];
    render();
}

const appRoot = document.getElementById('app');


const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
            <button>What Shoul I Do?</button>
            <button onClick={onRemoveAll}>Remove All</button>


            <ol>
                {/* Map oover app.options getting back an array of list (set key and text) */}
                {
                    app.options.map((option) => <li key={option}>Option: {option}</li>)
                }
            </ol>
        
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
        );
ReactDOM.render(template, appRoot);

};

render();