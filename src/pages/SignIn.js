const SignInButton = () => {
  const btn = document.createElement('button');
  btn.textContent = 'Sign In';
  return btn;
}

export default () => {
  const el = document.createElement('div');
  el.className = 'sign-in';
  el.appendChild(SignInButton());
  return el;
};
