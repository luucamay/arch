// Store is a container of the state of a component
// return an object with 3 methods that are getState, setState, suscribe
export default (initialState = {}) => {
  let state = { ...initialState};
  const listeners = [];
  return {
    getState: () => ({ ...state }),
    setState: (newState) => {
      state = { ...state, ...newState};
      listeners.forEach(fn => fn());
    },
    suscribe: (fn) => {
      listeners.push(fn);
    },
  };
};
