export const validateEmail = (email) => {
  const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}"); //text@text.com
  return regex.test(email);
};
