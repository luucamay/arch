import render from './lib/render';
import SignIn from './pages/SignIn';

const withState = 
  Component => 
    props => Component({ ...props, state: {} })

render(withState(SignIn), document.getElementById('root'));
