import { signIn, signOut, withAuth} from '../../src/lib/auth';

describe('auth', ()=> {
  it('deberia ...', ()=> {
    const Component = props => console.log(props) || null;
    const ComponentWithAuth = withAuth(Component);
    console.log(ComponentWithAuth());
  })
})