import { 
    combineReducers,
} from 'redux';

// reducers
import { messageReducer } from './message';

const rootReducer = combineReducers({
    message: messageReducer,
});

export default rootReducer;