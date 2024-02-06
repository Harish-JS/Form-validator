const Users = (users) => {
    if(!users) return 'No data available'
    if(users?.length === 0) return 'No match found'
    return users?.map(user => 
        `<div class="user_card">
            <div class="header">
                <div class="avatar">
                    <img src="${user.file.url || ''}" alt="avatar"/>
                </div>
                <div class="user_name">${user.name}</div>
            </div>
            <div class="user_email">Email: <span>${user.email}</span></div>
            <div class="user_contact">Contact: <span>${user.contact}</span></div>
            <div class="user_dob">D.O.B: <span>${user.dob}</span></div>
            <div class="user_gender">Gender: <span>${user.gender}</span></div>
            ${user.education && `<div class="user_education">Education: <span>${user.education}</span></div>`}
            <div class="user_occupation">Occupation: <span>${user.occupation}</span></div>
            <div class="user_username">Username: <span>${user.username}</span></div>
            <div class="user_pan">PAN number: <span>${user.pan}</span></div>
        </div>`
    ).join('')
};

export default Users