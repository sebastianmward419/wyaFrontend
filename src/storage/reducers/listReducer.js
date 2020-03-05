const initialState = 
{
    idSelected: null,
    pending   : false,
    users     : [],
    err       : null
}

const listReducer = (state = initialState, action) => {

    switch (action.type)
    {
        case 'SELECT_ID':
            return {...state, idSelected: action.id}

        case 'SET_USERS_PENDING':
            return {...state, pending: true}

        case 'SET_USERS':
            return {...state, users: action.users}

        case 'SET_USERS_ERROR':
            return {...state, err: action.err}

        default:
            return state
    }
        
}

export default listReducer;
