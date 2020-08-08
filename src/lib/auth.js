export const signIn = () => {};

export const signOut = () => {};

export const withAuth =
  Component =>
    props => Component({
      ...props,
      auth:{ signIn, signOut, }
    });