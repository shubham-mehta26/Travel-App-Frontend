export const validatePassword = (password) => {
  const regex = /^(?=.*[0-9])(?=.*[!@#$&*%])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(password);
};
