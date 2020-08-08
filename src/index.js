import render from './lib/render';
import createStore from './lib/createStore';
import App from './App';

const store = createStore({
  loading: false,
  user: { displayName: 'Lupo' },
});

const withStore =
  Component =>
    props => Component({ ...props, store });

const doRender = () =>
  render(withStore(App), document.getElementById('root'));

store.suscribe(doRender);

doRender();