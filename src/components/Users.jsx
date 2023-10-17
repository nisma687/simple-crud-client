import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers=useLoaderData();
    console.log(loadedUsers);
    const[users,setUsers]=useState(loadedUsers);


    const handleDelete=(_id)=>{
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE'

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0)
            {
                alert('Deleted Successfully');
                const remainingUsers=users.filter(user=>user._id!==_id);
                setUsers(remainingUsers);
            }
        })

    }
    
    return (
        <div>
            <h2>Total Users:{users.length}</h2>
            <div>
            {
                users.map(user=><div key={user._id}>
                    <p>{user.name}:
                    {user.email}
                    <Link to={`/update/${user._id}`}>
                    <button>
                        Update
                    </button>
                    </Link>

                    <button onClick={
                        ()=>handleDelete(user._id)}>X</button>
                    </p>
                    
                    </div>)
            }
            </div>

            <button >
                <a href='/'>Go Back</a>
            </button>
            
        </div>
    );
};

export default Users;