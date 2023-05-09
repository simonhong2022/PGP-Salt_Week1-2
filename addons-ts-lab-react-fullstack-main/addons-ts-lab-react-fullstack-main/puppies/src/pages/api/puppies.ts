import { Dispatch, SetStateAction } from "react";

export interface IPuppy {
     breed: string,
     name: string,
     birthdate: string
}

const BASE_PATH: string = 'http://localhost:9000/api/puppies';

export async function fetchPuppies(setPuppies: Dispatch<SetStateAction<IPuppy[]>>) {
    const response = await fetch(BASE_PATH);
    const responseData: IPuppy[] = await response.json();
    
    setPuppies(responseData);

}