import { Slot } from '@radix-ui/react-slot';
import { ReactNode, InputHTMLAttributes } from 'react';


export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className="flex items-center h-12 gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
            {props.children}
        </div>
    )
}

TextInputRoot.displayName = "TextInput.Root"

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props:TextInputIconProps) {
    return(
        <Slot className="w-6 h-6 text-gray-400">
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = "TextInput.Icon"

export interface TextInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputField(props: TextInputFieldProps) {
    return (
        <input 
            className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400"
            {...props}
        />
    )
}

TextInputField.displayName = "TextInput.Field"
    
export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputField,
    Icon: TextInputIcon,
}