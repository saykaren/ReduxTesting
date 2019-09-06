import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { updateUser } from './actions/user-action';



function App(propOne) {

  const [name, setName] = useState("");
  const { users } = propOne.users;
  const updateNameKaren = () => propOne.onUpdateUser(users);
 
  console.log(propOne);

  const onUpdateUser = (event) =>{
    
    if(event !== undefined && event !== null){
      const result = Object.values(event); //string
      
      console.log(result[0]);
      
      console.log(typeof(result));
      // propOne.users = "Sally";
    }
    

    
  }
  return (
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
        <div
          onClick={onUpdateUser()}
        >Update User</div>
        <form>
          <label>
            Title
            <input
              type="text"
              value={name}
              onChange={e=>setName(e.currentTarget.value)}
            />
          </label>
        </form>
        <div>
        User Name: {propOne.users} <br></br>
        Products Name: {propOne.products[0].name}
        </div>
        <button
          type="button"
          onClick={onUpdateUser({name})}
        >
          Update 
        </button>

        {name}

        <button
          type="button"
          onClick={updateNameKaren}
        >
          Update trying new thing
        </button>
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
  products: state.products,
  users: state.user
});

const mapActionsToProps = {
  onUpdateUser: updateUser
};

export default connect(mapStateToProps, mapActionsToProps)(App);
