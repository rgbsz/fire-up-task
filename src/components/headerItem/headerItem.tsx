import React from 'react'

const HeaderItem: React.FC<{ className: string }> = ({ className }): JSX.Element => {
    return (
        <div className={className}>
            Item
        </div>
    )
}

export default HeaderItem