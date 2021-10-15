import React from 'react';
import './accountSetup.css';

function AccountSetup({user}){
    return (
        <div className="account-setup">
            <div className="account-setup-cont">
                <div className="acc-setup-title">
                    <h1>Account Settings</h1>
                </div>
                <div className="welcome-text-wrapper">
                    <h4>Welcome {user} </h4>
                    <h5>Now lets set up your account</h5>
                    <button>Proceed</button>
                </div>
            </div>
        </div>
    )
}

export default AccountSetup;