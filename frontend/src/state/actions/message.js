import { SAVE_MESSAGE } from '../constants/message';

export const saveMessage = conversation => dispatch => {
    dispatch({
        type: SAVE_MESSAGE,
        payload: conversation,
    });
} 