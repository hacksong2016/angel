AccountsTemplates.configure({
  defaultLayout: 'mainLayout',
  defaultTemplate: 'LoginForm',
  defaultContentRegion: 'main',
  overrideLoginErrors: true,
  showForgotPasswordLink: true,
  enablePasswordChange: false,
  sendVerificationEmail: false,
  confirmPassword: false,
  negativeValidation: true,
  positiveValidation: true,
  negativeFeedback: false,
  positiveFeedback: false
});

AccountsTemplates.addField({
  _id: 'username',
  type: 'text',
  displayName: "用户名",
  required: true
});
// Define these routes in a file loaded on both client and server
AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/signin'
});

AccountsTemplates.configureRoute('signUp', {
  name: 'join',
  path: '/join'
});

AccountsTemplates.configureRoute('forgotPwd');

AccountsTemplates.configureRoute('resetPwd', {
  name: 'resetPwd',
  path: '/reset-password'
});
