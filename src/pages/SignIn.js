import SignInButton from '../components/SignInButton';

export default () => {
  const page = document.createElement('div');
  page.className = 'sign-in';

  page.appendChild(SignInButton());
  return page;
};
