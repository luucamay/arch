import render from '../../src/lib/render';

describe('render', () => {
  it('should render component in given target', () => {
    const Component = () => document.createElement('div');
    const target = document.createElement('div');
    expect(render(Component, target)).toBeUndefined();
    expect(target.children.length).toBe(1);
    expect(target.children[0] instanceof HTMLDivElement)
      .toBe(true);
  });
  it('should empty target before rendering', () => {
    const Component = () => document.createElement('div');
    const target = document.createElement('div');
    expect(render(Component, target)).toBeUndefined();
    expect(target.children.length).toBe(1);
    expect(target.children[0] instanceof HTMLDivElement)
      .toBe(true);
    expect(render(Component, target)).toBeUndefined();
    expect(target.children.length).toBe(1);
    expect(target.children[0] instanceof HTMLDivElement)
      .toBe(true);
  });
  it('should not append when component returns falsy', () => {
    const target = document.createElement('div');
    expect(render(() => null, target)).toBeUndefined();
    expect(target.children.length).toBe(0);
  });
});
