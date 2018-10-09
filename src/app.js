console.log('app running')

var app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer'

}

var template = (
<div>
    <h1>{app.title}</h1>
    <p>{app.subTitle}</p>
</div>
)

var user = {
    name: 'Marcelo Laos',
    age: 21,
    location: 'Atlanta, GA'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } else {
        return undefined;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name || 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);