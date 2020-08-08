import createStore from './lib/createStore';

const store = createStore({
  loading: false,
  user: null,
});

export const withStore =
  Component =>
    props => Component({ ...props, store });

export default store;