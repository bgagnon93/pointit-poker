import React from 'react'
import './UserList.css';
import User from "./User";

function UserList(props) {
    return(
        <div>
            <div className={"players-header"}>Players</div>
            <hr className="solid"/>
            <User name={"Brian"}/>
            <User name={"Deepika"}/>
            <User name={"Naomi"}/>
            <User name={"Reed"}/>
            <User name={"Tu"}/>
        </div>
    );
}

export default UserList