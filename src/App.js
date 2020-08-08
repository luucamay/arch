import SignIn from './pages/SignIn';
import Home from './pages/Home';

export default (props) => (
  (props.store.getState().user)
    ? Home(props)
    : SignIn(props)
);
