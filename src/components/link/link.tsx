import React from 'react'

import { Component } from './link.styles'

const Link: React.FC<{ text: string }> = ({ text }): JSX.Element => {
    return (
        <Component>{text}</Component>
    )
}

export default Link