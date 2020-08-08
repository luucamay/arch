const SignInButton = (props) => {
  console.log(props);
  const btn = document.createElement('button');
  btn.textContent = 'Sign In';
  btn.onclick = () => props.store.setState({
    loading: true,
  });

  if (props.store.getState().loading) {
    btn.disabled = 'true';
  }
  return btn;
};

export default (props) => {
  
  const el = document.createElement('div');
  el.className = 'sign-in';
  el.appendChild(SignInButton(props));
  return el;
};
