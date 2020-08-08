export const signIn = () => Promise.resolve({
  displayName: 'Lupo',
});

export const signOut = () => {};

export const withAuth =
  Component =>
    props => Component({
      ...props,
      auth:{ signIn, signOut, }
    });