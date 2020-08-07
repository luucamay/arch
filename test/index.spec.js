import { SignIn } from '../src/index';

describe('SignIn', () => {
  it('deberia ser una funcion', () => {
    expect(typeof SignIn).toBe('function');
  });
  it('deberia ser un pedacito de DOM', () => {
    const el = SignIn();
    expect(el instanceof HTMLDivElement).toBe(true);
    expect(el.className).toBe('sign-in');
  });
  it('deberia contener un boton', () => {
    const el = SignIn();
    expect(el.children.length).toBe(1);
    expect(el.children[0].tagName).toBe('BUTTON');
  })
});