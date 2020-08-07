import render from './lib/render';
import SignIn from './pages/SignIn';

const withState =
  Component =>
    props => Component({ ...props, state: { loading: false } });

render(withState(SignIn), document.getElementById('root'));
