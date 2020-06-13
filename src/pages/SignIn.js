export default () => {
    const page = document.createElement('div');
    page.className = 'sign-in';
    
    const signInButton = document.createElement('button');
    signInButton.innerText = 'Sign in';

    page.appendChild(signInButton);
    return page;
};