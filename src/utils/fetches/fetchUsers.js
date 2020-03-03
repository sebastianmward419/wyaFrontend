import * as listActions from '../../storage/actions/listActions.js';

const fetchUsers =  () => {
    return dispatch => {
        dispatch (listActions.setUsersPending ());

        fetch ('/api/get/officemates')
        .then (resp => resp.json ())
        .then (data => dispatch (listActions.setUsers (data)))
        .catch (err => dispatch (listActions.setUsersError (err)))
    }
}

export default fetchUsers