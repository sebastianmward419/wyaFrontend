const updateFetch =  userToChange => {
    let fetchOptions =
        {
            method: 'PUT',
            headers: 
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify (userToChange)
        }

        fetch (`/api/update/officemate/${userToChange.id}`, fetchOptions)
        .then (resp => resp.json ())
        .then (data => console.log (data))
        .catch (err => console.log (err))
}

export const UpdateStatus = props => {
    let userToChange = props.users [props.currentId];
        
        userToChange.status = props.statusObj.statusCode;

        updateFetch (userToChange);
}

export const UpdateLocation = (props, newLocation) => {
    let userToChange = props.users [props.currentId];

    userToChange.location = newLocation;

    updateFetch (userToChange);
}