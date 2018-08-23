import axios from "axios";

export async function login(email, location) {
  try {
    const result = await axios({
        method: 'post',
        url: `https://muse-flying-monkey.herokuapp.com/spotify/login`,
        data: {
          email,
          location
        }
      })
    const data = await result.data;
    return data;
  } catch (e) {
    return false;
  }
}
