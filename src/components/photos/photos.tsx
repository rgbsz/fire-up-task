import React from 'react'
import Photo from '../photo/photo'

const Photos: React.FC = (): JSX.Element => {
    return (
        <div className="row">
            <Photo />
            <Photo />
            <Photo />
            <Photo />
        </div>
    )
}

export default Photos