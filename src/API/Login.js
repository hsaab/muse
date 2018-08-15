import axios from "axios";

export function login(email, location) {
  axios({
    method: 'get',
    url: `https://flying-monkey-43234.herokuapp.com/spotify/login`
  })
    .then(result => {
      console.log("Logged In from spotify");
    })
    .catch(e => {
      return false;
    });
}
