export default (props) => {
  const element = document.createElement('button');
  element.innerText = props.text;
  return element;
};
