export const SignInButton = () => {
  const btn = document.createElement('button');
  return btn;
}

export const SignIn = () => {
  const el = document.createElement('div');
  el.className = 'sign-in';
  el.appendChild(SignInButton());
  return el;
}
