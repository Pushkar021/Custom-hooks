import React, { useEffect, useState } from "react";
import useisOnline from "../../hooks/isOnline";

const UserOnline = () => {
    const onlineStatus = useisOnline();
    console.log(onlineStatus);
  
    return (
            <div>
            <h1>User Online</h1>
            <p>Check the console for online status</p>
         <h1>{onlineStatus?"online":"offline"}</h1>
            </div>
  )
};
export default UserOnline;
