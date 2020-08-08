import render from './lib/render';
import createStore from './lib/createStore';
import SignIn from './pages/SignIn';

const store = createStore({ loading: false });
const withState =
  Component =>
    props => Component({ ...props, store });

render(withState(SignIn), document.getElementById('root'));
