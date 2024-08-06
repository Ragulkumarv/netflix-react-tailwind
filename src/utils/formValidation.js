export const formValidation = (email, password) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /.{8,}/;

  let msg = "";

  if (!emailPattern.test(email)) {
    msg = "Please enter a valid email address or phone number. ";
  }

  if (!passwordPattern.test(password)) {
    msg = `${msg}Password is not valid`;
  }

  if (!emailPattern.test(email) && passwordPattern.test(password)) {
    msg = "";
  }

  return msg;
};
