const SignInButton = ({ store, firebase }) => {
  const btn = document.createElement('button');
  btn.textContent = 'Sign In';
  btn.onclick = () => {
    store.setState({ loading: true });
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(({ user }) => store.setState({
        loading: false,
        user,
      }))
      .catch( error => console.log);
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
