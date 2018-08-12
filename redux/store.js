import { createStore, combineReducers, applyMiddleware, compose } from 'redux'


const isClient = () => {
  return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
};

const exampleInitialState = {
  language: { 
    selected: {},
    available: [
      { name: 'English', code: 'en' },
      { name: 'Español', code: 'es' }
    ]
  },
  isClient: isClient()
};


export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    
    default: return state
  };
};

export function initializeStore (initialState = exampleInitialState) {
  const devtools = (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__)
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f; // => undefined

  const store = createStore(
    combineReducers({
      data: reducer
    }), 
    initialState,
    compose(devtools)
  );

  return store;
};