import React from 'react'

const layout = ({ children }) => {
    return (
        <div>
            {children}
            <div>Sidebar</div>
        </div>
    )
}

export default layout
