import { SAVE_MESSAGE } from '../constants/message';

export const messageReducer = (state = { messages: [], }, action) => {
    switch (action.type) {
        case SAVE_MESSAGE:
            return {
                ...state,
                messages: state.messages.concat(action.payload),
            }
        default:
            return state;
    }
}