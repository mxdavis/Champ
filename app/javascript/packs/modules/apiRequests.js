import fetch from 'isomorphic-fetch'

export default {

  get(url){
    return fetch("http://localhost:3000/" + url + ".json", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
  }
}
