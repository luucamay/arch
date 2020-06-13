import createElement from '../lib/createElement';
import SignInButton from '../components/SignInButton';

export default () => createElement('div', {
  className: 'sign-in',
  children: [SignInButton()],
});
