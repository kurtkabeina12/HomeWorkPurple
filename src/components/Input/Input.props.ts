import { ChangeEvent } from "react";

export interface InputProps{
    placeholder: string,
    image: boolean,
    value: string, 
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}