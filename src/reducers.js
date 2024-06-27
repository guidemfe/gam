import { combineReducers } from 'redux';
import selectedPercentageReducer from './reducers/selectedPercentageReducer'; // Importe seu reducer aqui

const rootReducer = combineReducers({
  selectedPercentage: selectedPercentageReducer, // Adicione seu reducer ao rootReducer
  // Adicione outros reducers aqui, se houver
});

export default rootReducer;
