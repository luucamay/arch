export default (Component, target) => {
  const child = Component({});
  if (child) {
    target.innerHTML = '';
    target.appendChild(child);
  }
};
