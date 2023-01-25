export const server_url = 'http://yge.wvi.mybluehost.me/knowtify/api'

export const _post = (url, data, success = (f) => f, error = (f) => f) => {
//   const user = store.getState().auth.user
  fetch(`${server_url}/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    //   Authorization: `Bearer ${user.access_token}`,
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

// fetch(`${SERVER_URL}/create/project`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(CreateProject)
// })
//     .then(raw => raw.json())
//     .then(resp => {
//         console.log(resp)
//     })
//     .catch(e => {
//         console.log(e)
//     })
