import { createStore } from 'redux';
import rootReducer from './reducers'; // Suponha que você tenha um rootReducer que combina todos os reducers do seu aplicativo

const store = createStore(rootReducer);

export default store;
