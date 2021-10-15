import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import NavCtrlsLoggedIn from './navctrlsLgd';
import NavCtrlsNotLoggedIn from './navCtrlsNotLgd';
// import { AuthStateContext } from './context';
import { useAuthState } from './context';
import { userContext } from './userContext';
import { AuthStateCurrentContext } from './context';
import WatchlistBtn from './WatchlistBtn';
import { UsernameCtx } from './contexts/UserNameCtx';

function Navbar() {
    // const token = useContext(AuthStateContext);
    // const user = useAuthState();
    const [authState, setAuthState] = useContext(AuthStateCurrentContext)
    const [globalUsername, setGlobalUsername] = useContext(userContext);
    const [userName, setUsername] = useContext(UsernameCtx)
    const [isLoggedIn, setLoggedIn] = useState({
        loggedIn: true,
        username: ''
    });
    useEffect(()=>{
        let currentusername = localStorage.getItem('currentUser');
        setGlobalUsername(currentusername);
        setUsername(currentusername);
        currentusername ? setAuthState(true) : setAuthState(false);
        console.log(`local ${currentusername}\ncontext ${globalUsername}`)
        // token.user = currentusername;
        // console.log(token)
        currentusername ? setLoggedIn({loggedIn: true, username:currentusername}) :setLoggedIn({loggedIn:false, username:currentusername})
    },[])
    return (
        <div className="navbar-cont">
            <div className="project-title-wrapper">
                <div className="project-title-cont">
                    <h2><i className="fa fa-plug"></i> MOVIES</h2>
                </div>
            </div>
            <div className="nav-controls-wrapper">
                <WatchlistBtn />
                {
                    authState === true ? <NavCtrlsLoggedIn username={isLoggedIn.username} /> : <NavCtrlsNotLoggedIn />
                }
            </div>
        </div>
    )
}

export default Navbar;