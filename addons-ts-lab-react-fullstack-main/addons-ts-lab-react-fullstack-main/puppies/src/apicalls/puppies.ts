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

export async function fetchPuppies(setPuppies: Dispatch<SetStateAction<IPuppy[]>>) {
    const response = await fetch(BASE_PATH!);
    const responseData: IPuppy[] = await response.json();

    setPuppies(responseData);

}

export async function fetchPuppyPhoto(breed: string | string[], setPhotoUrl: Dispatch<SetStateAction<string>>) {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${breed}+dog&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_KEY}`);
    const responseData = await response.json();
    setPhotoUrl(responseData.results[0].urls.small);
}

export async function addPuppy(event: React.FormEvent<HTMLFormElement>,
    setPuppies: Dispatch<SetStateAction<IPuppy[]>>, setOpen: Dispatch<SetStateAction<boolean>>,
    setErrMessage: Dispatch<SetStateAction<string>>) {
    const reqBody: PuppyRequestDto = {
        breed: event.currentTarget.breed.value,
        name: event.currentTarget.pname.value,
        birthdate: event.currentTarget.birthdate.value
    };

    if (!reqBody.breed) {
        setErrMessage('Please choose a breed.');
        return;
    }

    if (!reqBody.name) {
        setErrMessage('Please choose a name.');
        return;
    }

    const reqOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reqBody)
    };

    const response = await fetch(BASE_PATH!, reqOptions);
    await fetchPuppies(setPuppies);
    setOpen(false);
    setErrMessage('');

}

export async function deletePuppy(id: string, setPuppies: Dispatch<SetStateAction<IPuppy[]>>) {
    const reqOptions = {
        method: 'DELETE'
    }
    const response = await fetch(`${BASE_PATH}/${id}`, reqOptions);
    await fetchPuppies(setPuppies);

}
