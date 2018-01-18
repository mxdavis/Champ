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
  },

  post(url, body) {
    return fetch("http://localhost:3000/" + url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }).then(response => response.json())
  },

  delete(url) {
    return fetch("http://localhost:3000/" + url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
  },

  patch(url) {
    return fetch("http://localhost:3000/" + url, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
  }

}
