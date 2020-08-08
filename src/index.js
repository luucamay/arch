import render from './lib/render';
import store, { withStore } from './store';
// import { withAuth } from './lib/auth';
import { withFirebase } from './lib/firebase';
import App from './App';

const doRender = () =>
  render(
    withStore(withFirebase(App)),
    document.getElementById('root')
    );

store.suscribe(doRender);

doRender();