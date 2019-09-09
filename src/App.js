// import React, {useState} from 'react';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { updateUser } from './actions/user-action';
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  };

  
  onUpdateUser(event){
    
    this.props.onUpdateUser(event.currentTarget.value);
    console.log(this.props);
  }

  render() {

    return(
    <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>

         <form>
           <label>
             Title
           </label>
         </form>
         <div>
         User Name: {this.props.users} <br></br>
         Products Name: {this.props.products[0].name}
         </div>
         <input
          onChange={this.onUpdateUser}/>
         
         {this.props.user}


      </header>
    </div>
    );
  }
}
///trying to get functional component to work which reads the store but doesn't seem to work on updating
// function App(propOne) {

//   const [name, setName] = useState("");
//   const { users } = propOne.users;
//   const updateNameKaren = () => propOne.onUpdateUser(users);
 
//   console.log(propOne);

//   const onUpdateUser = (event) =>{
    
//     if(event !== undefined && event !== null){
//       const result = Object.values(event); //string
      
//       console.log(result[0]);
      
//       console.log(typeof(result));
//       // propOne.users = "Sally";
//     }
    

    
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <div
//           onClick={onUpdateUser()}
//         >Update User</div>
//         <form>
//           <label>
//             Title
//             <input
//               type="text"
//               value={name}
//               onChange={e=>setName(e.currentTarget.value)}
//             />
//           </label>
//         </form>
//         <div>
//         User Name: {propOne.users} <br></br>
//         Products Name: {propOne.products[0].name}
//         </div>
//         <button
//           type="button"
//           onClick={onUpdateUser({name})}
//         >
//           Update 
//         </button>

//         {name}

//         <button
//           type="button"
//           onClick={updateNameKaren}
//         >
//           Update trying new thing
//         </button>
//       </header>
//     </div>
//   );
// }

const mapStateToProps = (state, props) => {
  
  return {
    products: state.products,
    users: state.user,
    userPlusProp: `${state.user} ${props.aRandomProps}`
  }
};

const mapActionsToProps = (dispatch, props) =>{
  
  return bindActionCreators({
  onUpdateUser: updateUser
  }, dispatch);
};

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) =>{
//   console.log(propsFromState, propsFromDispatch, ownProps);
//   return {};
// };

export default connect(mapStateToProps, mapActionsToProps)(App);
