// export const server_url = 'https://yge.wvi.mybluehost.me/knowtify/api'
export const server_url = 'http://localhost:6676/api';
export const imgUrl = "http://localhost:6676/uploads";
// import store from '../redux/store'

export const _post = (url, data, success = (f) => f, error = (f) => f) => {
  const token = localStorage.getItem('@@token')
  fetch(`${server_url}/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${token}`,
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

export const _update = (url, data, success = (f) => f, error = (f) => f) => {
  const token = localStorage.getItem("@@token");
  fetch(`${server_url}/${url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((raw) => raw.json())
    .then((result) => {
      success(result);
    })
    .catch((err) => {
      error(err);
    });
};


export const _delete = (url, data, success = (f) => f, error = (f) => f) => {
  const token = localStorage.getItem('@@token')
  fetch(`${server_url}/${url}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${token}`,
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

export const _get = (url, success = (f) => f, error = (f) => f) => {
  const token = localStorage.getItem('@@token')

  fetch(`${server_url}/${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${token}`,
    },
  })
    .then((raw) => raw.json())
    .then((result) => {
      success(result)
    })
    .catch((err) => {
      error(err)
    })
}
