import { Dispatch, SetStateAction } from "react";
import IUser from "../type/type";


const BASE_PATH: string = 'https://randomuser.me/api/';

export async function fetchUser(setUser: Dispatch<SetStateAction<IUser>>, setName: Dispatch<SetStateAction<string>>) {
    const response = await fetch(BASE_PATH);
    const responseData = (await response.json()).results[0];
    const user:IUser = {
        name: `${responseData.name.first} ${responseData.name.last}`,
        address: `${responseData.location.street.name} ${responseData.location.street.number}, 
        ${responseData.location.postcode}, ${responseData.location.city}, ${responseData.location.state} ${responseData.location.country}`,
        age: `${responseData.dob.age}`
    }
    setUser(user);
    setName(user.name);
}