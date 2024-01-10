import axios from "axios";

export const signupHandler = async (username, number, email, password) => {
  try {
    const { data } = await axios.post(
      "https://travel-app-backend.cyclic.cloud/api/auth/register",
      {
        username: username,
        number: number,
        email: email,
        password: password,
      }
    );
    console.log(data);
  } catch (err) {
    console.error(err); // Log the entire error object for more information
  }
};
