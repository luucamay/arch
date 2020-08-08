import render from './lib/render';
import store, { withStore } from './store';
import { withAuth } from './lib/auth';
import App from './App';

const doRender = () =>
  render(withAuth(withStore(App)), document.getElementById('root'));

store.suscribe(doRender);

doRender();