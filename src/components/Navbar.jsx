import React, { useContext } from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../contexts/AuthContext'

const Navbar = () => {
    const { currentUser } = useContext(AuthContext)
    return (
        <div className="navbar">
            <span className="logo">InstantChat</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                <span className="name">{currentUser.displayName}</span>
                <button onClick={() => signOut(auth)}>Log out</button>
            </div>
        </div>
    )
}

export default Navbar;
