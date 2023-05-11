import { Dispatch, SetStateAction } from "react";

export type PuppyRequestDto = {
    breed: string,
    name: string,
    birthdate: string
}

export interface IPuppy {
    id: string,
    breed: string,
    name: string,
    birthdate: string
}

const BASE_PATH: string = 'http://localhost:9000/api/puppies';

export async function fetchPuppy(id: string | string[], setPuppy: Dispatch<SetStateAction<IPuppy>>) {
    const response = await fetch(`${BASE_PATH}/${id}`);
    const responseData: IPuppy = await response.json();

    setPuppy(responseData);

}

export async function updatePuppy(id: string, event: React.FormEvent<HTMLFormElement>,
    setPuppy: Dispatch<SetStateAction<IPuppy>>,setOpen: Dispatch<SetStateAction<boolean>>,
    setErrMessage: Dispatch<SetStateAction<string>> ) {
    
    const reqBody: PuppyRequestDto = {
       breed: event.currentTarget.breed.value,
       name: event.currentTarget.pname.value,
       birthdate: event.currentTarget.birthdate.value
    }

    if (!reqBody.breed) {
       setErrMessage('Please choose a breed.');
       return;
   }

   if (!reqBody.name) {
       setErrMessage('Please choose a name.');
       return;
   }

   const reqOptions = {
       method: 'PUT',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(reqBody)
   };

   const response = await fetch(`${BASE_PATH}/${id}`, reqOptions);
   await fetchPuppy(id, setPuppy);
   setOpen(false);
   setErrMessage('');
   
}

export async function deleteSpecificPuppy(id: string, setPuppy: Dispatch<SetStateAction<IPuppy>>) {
    const reqOptions = {
        method: 'DELETE'
    }
    const response = await fetch(`${BASE_PATH}/${id}`, reqOptions);
}