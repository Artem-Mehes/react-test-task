const choosedDateReducer = (state = {day: '', month: ''}, action) => {
    const choosedDate = action.choosedDate;

    switch(action.type) {
        case 'ADD_CHOOSED_DATE':
            return {...choosedDate};
        default:
            return state;
    }
};

export default choosedDateReducer;