export const signIn = () =>
  new Promise(resolve => setTimeout(
    () => resolve({ displayName: 'Lupo' }),
    2 * 1000
  ));

export const signOut = () => {};

export const withAuth =
  Component =>
    props => Component({
      ...props,
      auth:{ signIn, signOut, }
    });