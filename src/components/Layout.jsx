import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <>
            <h2 className='heading'><Link to='/'>😸EXPLODING KITTEN</Link></h2>
            <Outlet />
        </>
    )
}
