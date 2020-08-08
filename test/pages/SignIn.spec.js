import SignIn from '../../src/pages/SignIn';

describe('SignIn', () => {
  it('deberia ser una funcion', () => {
    expect(typeof SignIn).toBe('function');
  });
  it.only('deberia retornar un div con clase sign-in', () => {
    const getState = jest.fn().mockReturnValue({
      loading: false,
    });
    const el = SignIn({
      store: { getState }
    });
    expect(getState.mock.calls.length).toBe(1);
    expect(getState.mock.calls[0].length).toBe(0);
    expect(el instanceof HTMLDivElement).toBe(true);
    expect(el.className).toBe('sign-in');
  });
  it('deberia contener un boton', () => {
    const el = SignIn();
    expect(el.children.length).toBe(1);
    expect(el.children[0].tagName).toBe('BUTTON');
  });
});
