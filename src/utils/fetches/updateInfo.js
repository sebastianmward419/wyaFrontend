export const UpdateInfo = props => {
    let userToChange = props.users [props.currentId];
        
        userToChange.status = props.statusObj.statusCode;

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