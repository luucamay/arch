// TO DO review arrays and objects, why they are using filter?, the ...rest means what?
// Destructuring concept to check
export default (tagName, opts = {}) => {
  const { children, ...rest } = opts;
  const element = Object.assign(
    document.createElement(tagName),
    rest,
  );

  if (children && typeof children.forEach === 'function') {
    children
      .filter((item) => item)
      .forEach(element.appendChild.bind(element));
  }

  return element;
};
