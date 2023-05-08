import { Dispatch, FC, SetStateAction, SyntheticEvent, useState } from "react"
import IUser from "../type/type"

type EditUserFormProps = {
    name: string
    setName: Dispatch<SetStateAction<string>>,
    onNameChanged(e: React.ChangeEvent<HTMLInputElement>): void
}

export function EditUserForm({name, setName, onNameChanged}: EditUserFormProps) {
 
 return (
    <form action="">
    <input type="text" name="name" value={name} onChange={onNameChanged} placeholder="name"/>
    <button>Edit name</button>

    </form>

 )
}
    
