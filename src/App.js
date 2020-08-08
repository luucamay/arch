import SignIn from './pages/SignIn';
import Home from './pages/Home';

export default ({ store }) => (
  (store.getState().user)
    ? Home({ store })
    : SignIn({ store })
);
