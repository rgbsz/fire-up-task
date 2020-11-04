import React, { useState } from 'react'

import { Input } from './textfield.styles'
import { ITextFieldProps } from './textfield.types'

const TextField: React.FC<ITextFieldProps> = ({ getWeather }): JSX.Element => {
    const [value, setValue] = useState<string>('')
    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        getWeather(value)
    }
    return (
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleOnSubmit(e)}>
            <Input type='text' placeholder='City name...' onInput={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}/>
        </form>
    )
}

export default TextField