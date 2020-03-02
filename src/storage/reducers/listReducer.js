const initialState = 
{
    idSelected: null,
    users     : []
}

const listReducer = (state = [], action) => {

    switch (action)
    {
        case 'SELECT_ID':
            return initialState.idSelected = action.id
        case 'SET_USERS':
            return initialState.users = action.users
    }
        
    return state;
}

export default listReducer;