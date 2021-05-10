import { 
    combineReducers,
} from 'redux';

// reducers
import { messageReducer } from './message';
import { userReducer } from './user';

const rootReducer = combineReducers({
    message: messageReducer,
    user: userReducer,
});

export default rootReducer;