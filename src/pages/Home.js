export default ({ store }) => {
  const el = document.createElement('div');
  el.className = 'home';
  el.innerText = `hola ${store.getState().user.displayName}`;
  return el;
};
