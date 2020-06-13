import SignIn from '../../src/pages/SignIn';

describe('SignIn', () => {
  it('should return div with nested button', () => {
    const el = SignIn();
    expect(el.tagName).toBe('DIV');
    expect(el.className).toBe('sign-in');
    expect(el.children.length).toBe(1);
    expect(el.children[0].tagName).toBe('BUTTON');
    expect(el.children[0].innerText).toBe('Sign in');
  });
});
