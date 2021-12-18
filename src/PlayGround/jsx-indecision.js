console.log('App.js is running!');

const appRoot = document.getElementById('app')

// JSX - JavaScript XML
const app={
    title: 'Indecision App',
    subtitle: 'Put your life in hands of a computer!',
    options: []
}

const onFormSubmit=(e)=>{
    e.preventDefault();
    const option=e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value='';
    }
    renderApp();
};
const removeAll=()=>{
    app.options=[]
    renderApp();
}
const onMakeDecision=()=>{
    const randomNum=Math.floor(Math.random()*app.options.length);
    const option=app.options[randomNum];
    alert(option);
}
const renderApp=()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length>0 ? 'Here are your Options' : 'No Options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length===0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot); 
};
renderApp();
// const user={
//     name: 'Abhishek',
//     age: 20,
//     location: 'New York'
// }
// function getLocation(loc){
//     if(loc){
//         return <p>Location: {loc}</p>;
//     }
// }
// const templateTwo=(
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'} !</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

// ReactDOM.render(templateTwo,appRoot)