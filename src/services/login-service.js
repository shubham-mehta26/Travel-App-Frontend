import axios from "axios";

export const loginHandler = async (number, password) => {
  try {
    const {
      // eslint-disable-next-line
      data: { accessToken: accessToken, username },
    } = await axios.post(
      "https://travel-app-backend.cyclic.cloud/api/auth/login",
      {
        number: number,
        password: password,
      }
    );
    console.log({ accessToken, username });
  } catch (err) {
    console.error(err);
  }
};
