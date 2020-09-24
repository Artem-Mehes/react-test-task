const showPopupReducer = (state = false, action) => {
    switch(action.type) {
        case 'CHANGE_SHOW_POPUP':
            return action.value;
        default:
            return state;
    }
};

export default showPopupReducer;