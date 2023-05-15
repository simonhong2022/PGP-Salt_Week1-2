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

const BASE_PATH = process.env.NEXT_PUBLIC_PORT;

export async function fetchPuppy(id: string | string[], setPuppy: Dispatch<SetStateAction<IPuppy>>, setPhotoUrl: Dispatch<SetStateAction<string>>) {
    const response = await fetch(`${BASE_PATH}/${id}`);
    const responseData: IPuppy = await response.json();
    setPuppy(responseData);

    const response1 = await fetch(`https://api.unsplash.com/search/photos?query=${responseData.breed}+dog&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_KEY}`);
    const responseData1 = await response1.json();
    setPhotoUrl(responseData1.results[0].urls.small);
}

export async function updatePuppy(id: string, event: React.FormEvent<HTMLFormElement>,
    setPuppy: Dispatch<SetStateAction<IPuppy>>,setOpen: Dispatch<SetStateAction<boolean>>,
    setErrMessage: Dispatch<SetStateAction<string>>, setPhotoUrl: Dispatch<SetStateAction<string>>  ) {
    
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
   await fetchPuppy(id, setPuppy, setPhotoUrl);
   setOpen(false);
   setErrMessage('');
   
}

export async function deleteSpecificPuppy(id: string, setPuppy: Dispatch<SetStateAction<IPuppy>>) {
    const reqOptions = {
        method: 'DELETE'
    }
    const response = await fetch(`${BASE_PATH}/${id}`, reqOptions);
}