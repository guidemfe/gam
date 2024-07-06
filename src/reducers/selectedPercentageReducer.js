const initialState = 0; // Define o estado inicial

const selectedPercentageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TECHNICAL_PERCENTAGE':
      return action.payload;
    case 'SET_MANAGERIAL_PERCENTAGE':
      return action.payload;
    case 'SET_INTEGATION_PERCENTAGE':
      return action.payload;
    case 'SET_OPERATIONAL_PERCENTAGE':
      return action.payload;
    case 'SET_MAINTAINABILITY_PERCENTAGE':
      return action.payload;
    case 'SET_SCALABILITY_PERCENTAGE':
      return action.payload;
    case 'SET_PILOT_PERCENTAGE':
      return action.payload;
    default:
      return state; // Retorna o estado atual se a ação não for correspondida
  }
};

export default selectedPercentageReducer;
