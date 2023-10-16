
import { NavLink } from 'react-router-dom';
import './App.css'

function App() {
  
  const handleAddUser=e=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const user={name,email};
    console.log(user);
    fetch('http://localhost:5000/users',{
     method:'POST',
     headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(user)
      
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId)
      {
        alert('users added successfully');
        form.reset();
      }
    })

  }

  return (
    <>

      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name='name' id=''/>
        <br />
        <input type="email" name='email' id=''/>
        <br />
        <br />
        <input type="submit"value="add user" />
      
      
      
      
      </form>

      <h3>Users:
        <NavLink to='/users'>Users</NavLink>
      </h3>

    </>
  )
}

export default App
