const SignInButton = (props) => {
  const btn = document.createElement('button');
  btn.textContent = 'Sign In';
  if (props.state.loading) {
    btn.disabled = 'true';
  }
  return btn;
};

export default (props) => {
  console.log(props);
  const el = document.createElement('div');
  el.className = 'sign-in'; 
  el.appendChild(SignInButton(props));
  return el;
};
