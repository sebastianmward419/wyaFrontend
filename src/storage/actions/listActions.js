export const selectId = id => ({type: 'SELECT_ID', id});

export const setUsersPending = () => ({type: 'SET_USERS_PENDING'});

export const setUsers = users => ({type: 'SET_USERS', users: users})

export const setUsersError = err => ({type: 'SET_USERS_ERROR', err});