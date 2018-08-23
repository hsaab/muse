import axios from "axios";

export async function test(email, location) {
  try {
    const result = await axios({
      method: 'get',
      url: `https://muse-flying-monkey.herokuapp.com/spotify/test`,
      params: {
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
