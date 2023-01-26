export const server_url = 'http://yge.wvi.mybluehost.me/knowtify/api'
import store  from "../redux/store"

export const _post = (url, data, success = (f) => f, error = (f) => f) => {
    const user = store.getState().auth.user
  fetch(`${server_url}/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
    },
    body: JSON.stringify(data),
  })
    .then((raw) => raw.json())
    .then((result) => {
      success(result)
    })
    .catch((err) => {
      error(err)
    })
}
export const _get = (url, data, success = (f) => f, error = (f) => f) => {
    const user = store.getState().auth.user
  fetch(`${server_url}/${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
    }
  })
    .then((raw) => raw.json())
    .then((result) => {
      success(result)
    })
    .catch((err) => {
      error(err)
    })
}
