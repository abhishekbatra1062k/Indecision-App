class VisibilityToggle extends React.Component{
  constructor(props){
    super(props);
    this.handleToggleVisibility=this.handleToggleVisibility.bind(this);
    this.state={
      visibility: false,
      title: 'Visibility Toggle',
      details: 'Now, You can see the details.'
    };
  }
  handleToggleVisibility(){
    this.setState((prevState)=>{
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render(){
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
        {this.state.visibility && (<p>{this.state.details}</p>)}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'))



// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();

// // My approach

// const appRoot = document.getElementById('app');

// let b='Show Details'
// let text='Here are your details!'
// const showText=()=>{
//     if(b==='Show Details'){
//         b='Hide Details'
//         text='Here are your details!'
//     }else{
//         b='Show Details'
//         text=undefined
//     }
//     renderApp();
// };
// const renderApp=()=>{
//     const template=(
//         <div>
//             <h1>Visibilty Toggle</h1>
//             <button onClick={showText}>{b}</button>
//             <p>{text}</p>
//         </div>
//     );

//     ReactDOM.render(template,appRoot);
// }
// renderApp();