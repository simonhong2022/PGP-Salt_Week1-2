import React, { useEffect, useState } from 'react';
import './App.css';
import IUser from './type/type';
import { fetchUser } from './api/api';
import { EditUserForm } from './component/EditUserForm';

function App() {

  const [user, setUser] = useState<IUser>({} as IUser);
  const [name, setName] = useState<string>("");
  useEffect(() => {
    fetchUser(setUser, setName);
  }, []);

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
      <EditUserForm name={name} onNameChanged={handleChange} />
    </main>
  );
}

export default App;
