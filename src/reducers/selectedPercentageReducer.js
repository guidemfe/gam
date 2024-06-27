const initialState = 0; // Define o estado inicial

const selectedPercentageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_PERCENTAGE':
      return action.payload; // Atualiza o estado com o payload da ação
    default:
      return state; // Retorna o estado atual se a ação não for correspondida
  }
};

export default selectedPercentageReducer;
