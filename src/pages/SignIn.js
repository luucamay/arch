const SignInButton = ({ store, auth }) => {
  const btn = document.createElement('button');
  btn.textContent = 'Sign In';
  btn.onclick = () => {
    store.setState({ loading: true });
    auth.signIn()
      .then(user => store.setState({
        loading: false,
        user,
      }));
  };

  if (store.getState().loading) {
    btn.disabled = 'true';
  }
  return btn;
};

export default (props) => {
  // console.log(props);
  const el = document.createElement('div');
  el.className = 'sign-in';
  el.appendChild(SignInButton(props));
  return el;
};
