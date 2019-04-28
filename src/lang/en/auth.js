module.exports = {
  signIn: {
    title: 'Sign in',
    inputs: {
      email: {
        placeholder: 'Email',
        validation: 'Please input your email!',
      },
      password: {
        placeholder: 'Password',
        validation: 'Please input your password!',
      },
    },
    btnSignIn: 'Sign in',
    or: 'Or ',
    signUpText: 'sign up now!',
  },
  signUp: {
    title: '',
    inputs: {
      email: {
        name: 'Email',
        placeholder: 'Please input your email!',
        validation: 'Please input your email!',
        notValid: 'The input is not valid email!',
      },
      firstName: {
        name: 'First name',
        placeholder: '',
        validation: 'Please input your first name!',
      },
      lastName: {
        name: 'Last name',
        placeholder: '',
        validation: 'Please input your last name!',
      },
      password: {
        name: 'Password',
        placeholder: '',
        validation: 'Please input your password!',
      },
      confirmPassword: {
        name: 'Confirm Password',
        placeholder: '',
        validation: 'Please confirm your password!',
        notSame: 'Two passwords that you enter is inconsistent!',
      },
    },
    btnSignUp: 'Sign up',
    or: 'Or ',
    signInText: 'sign in now!',
  },
};
