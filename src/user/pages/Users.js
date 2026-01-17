import React from "react";

import UserList from "../components/UserList";

const Users = () => {
    
  const USERS = [
    { id: 'u1', 
    name: 'Rauf', 
    image: 'https://randomuser.me/api/portraits/men/1.jpg', 
    places: 3 }
];  

  return <UserList items={USERS} />;
};

export default Users;