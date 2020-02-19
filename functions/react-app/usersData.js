import fetch from 'isomorphic-fetch'

export default function fetchUserData() {
  return fetch('https://grob0t-628ae.firebaseio.com/users.json').then(data => data.json())
}
