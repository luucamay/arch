import createElement from '../lib/createElement';

export default (props) => createElement('button', {
  innerText: props.text,
});
