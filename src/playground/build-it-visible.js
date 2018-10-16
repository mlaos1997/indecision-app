

const appRoot = document.getElementById('app');

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
            {visibility && (
                <p>These are the details</p>
            )}
        </div>
    )

    ReactDOM.render(template, appRoot);
};

render();