import React from 'react';

const Profile = ({ name, email }) => {
return (
<div className="p-4 border rounded shadow">
    <h2 className="text-xl">Profile</h2>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
</div>
);
};

export default Profile;