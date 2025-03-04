import { createContext, useContext, useReducer } from 'react';

const TotalPriceContext = createContext(null); //Menyimpan State

const TotalPriceDispatchContext = createContext(null); //Menyimpan Action

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE': {
      return {
        total: action.payload.total,
      };
    }
    default:
      throw Error('Unknow action : ', action.type);
  }
};

export function TotalPriceProvider({ children }) {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
}

export function useTotalPrice() {
  return useContext(TotalPriceContext);
}

export function useTotalPriceDispatch() {
  return useContext(TotalPriceDispatchContext);
}
