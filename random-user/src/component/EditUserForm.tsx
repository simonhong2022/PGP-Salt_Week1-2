import { Dispatch, FC, SetStateAction, SyntheticEvent, useState } from "react"
import IUser from "../type/type"

type EditUserFormProps = {
    name: string
    onNameChanged(e: React.ChangeEvent<HTMLInputElement>): void
}

export function EditUserForm({ name, onNameChanged }: EditUserFormProps) {

    return (
        <form action="">
            <p>Edit your name:</p>
            <input type="text" name="name" value={name} onChange={onNameChanged} placeholder="name" />
        </form>

    )
}

