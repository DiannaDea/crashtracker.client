module.exports = {
  signIn: {
    title: 'Увійти до системи',
    inputs: {
      email: {
        placeholder: 'Електронна пошта',
        validation: 'Будь ласка, введіть адресу електронної пошти!',
      },
      password: {
        placeholder: 'Пароль',
        validation: 'Будь ласка, введіть пароль!',
      },
    },
    btnSignIn: 'Увійти',
    or: 'Або ',
    signUpText: 'зареєструйтеся зараз!',
  },
  signUp: {
    title: 'Створити обліковий запис',
    inputs: {
      email: {
        name: 'Електронна пошта',
        placeholder: 'Введіть адресу електронної пошти!',
        validation: 'Будь ласка, введіть адресу електронної пошти!',
        notValid: 'Недійсна електронна пошта',
      },
      firstName: {
        name: 'Ім\'я',
        placeholder: '',
        validation: 'Будь ласка, введіть своє ім\'я!',
      },
      lastName: {
        name: 'Прізвище',
        placeholder: '',
        validation: 'Будь ласка, введіть своє прізвище!',
      },
      password: {
        name: 'Пароль',
        placeholder: '',
        validation: 'Будь ласка, введіть пароль!',
      },
      confirmPassword: {
        name: 'Підтвердити пароль',
        placeholder: '',
        validation: 'Будь ласка, підтвердьте свій пароль!',
        notSame: 'Два паролі, які ви вводите, неспрівпадають!',
      },
    },
    btnSignUp: 'Зареєструватися',
    or: 'Або ',
    signInText: 'увійти зараз!',
  },
};
