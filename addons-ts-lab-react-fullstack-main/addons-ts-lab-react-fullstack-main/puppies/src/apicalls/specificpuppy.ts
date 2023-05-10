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

export async function fetchPuppy(id: string, setPuppy: Dispatch<SetStateAction<IPuppy>>) {
    const response = await fetch(`${BASE_PATH}/${id}`);
    const responseData: IPuppy = await response.json();

    setPuppy(responseData);

}