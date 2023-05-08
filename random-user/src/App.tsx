import React, { useEffect, useState } from 'react';
import './App.css';
import IUser from './type/type';
import { fetchUser } from './api/api';
import { EditUserForm } from './component/EditUserForm';

function App() {
  
  const [user, setUser] = useState<IUser>({} as IUser);
  useEffect(() => {
    fetchUser(setUser);
  }, []);
  const userName: string = `${user.name}`;
  console.log(userName);
  
 
  const [name, setName] = useState<string>(userName);
  console.log(name);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    setName(value);
  }

  
  return (

    <main>
      <div className="name">
          <ul>
            <li>Name: {name}</li>
            <li>Address: {user.address}</li>
            <li>Age: {user.age}</li>
          </ul>
      </div>
      <EditUserForm name={name} setName={setName} onNameChanged={handleChange}/>
    </main>
  );
}

export default App;
