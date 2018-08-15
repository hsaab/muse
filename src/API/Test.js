import axios from "axios";

export function test(email, location) {
  axios({
    method: 'get',
    url: `https://flying-monkey-43234.herokuapp.com/spotify/test?email=${email}&location=${location}`
  })
    .then(result => {
      if(result.data.success && result.data.existing) {
        return { success: true, existing: true };
      } else if(result.data.success && !result.data.existing) {
        return { success: true, existing: false };
      } else {
        return false
      }
    })
    .catch(e => {
      return false;
    });
}
