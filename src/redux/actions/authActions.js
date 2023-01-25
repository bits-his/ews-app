import toast from 'react-hot-toast';
import { API_URL, _postApi } from '../../api';
import store from '../store';
import {CREATE_USER, ERROR_LOG, AUTH_USER, LOGOUT } from './constants'

export function createUser(data,cb=(f)=>f,err=(f)=>f) {
  return (dispatch) => {
    _postApi(`agents?query_type=create`,
      data, resp => {
        if (resp.success){
        dispatch({
          type: CREATE_USER,
          payload: resp.results
        })
        cb()
        }
      }, error => {
        console.error(error);
        dispatch({
          type: ERROR_LOG,
          payload: error
        })
        err()
      })
  }
}

export function signup(objs = {}, success = (f) => f, error = (f) => f) {
  return (dispatch) => {
    //   dispatch({ type: types.LOADING });

    fetch(`${API_URL}/users/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objs),
    })
      .then((raw) => raw.json())
      .then((data) => {
        console.log(data);
        //   dispatch({ type: LOADING_SIGNUP });
        if (data.success) {
          dispatch(
            login(
              objs,
              (data) => {
                console.log("success", data);
                success(data);
                const { token } = data;
                dispatch({ type: AUTH_USER, payload: data });
                // dispatch({ type: types.society.CURRENT, payload: data.societies });
                console.log("Register submitted");
                if (token) {
                  localStorage.setItem("@@token", JSON.stringify(token));
                }
              },
              (err) => {
                console.log("error", err);
                error(err);
                if (err && err.message)
                  dispatch({
                    type: ERROR_LOG,
                    payload: err,
                  });
              }
            )
          );
        } else {
          dispatch({
            type: ERROR_LOG,
            payload: "Server error, try again.",
          });
        }
      })
      .catch((error) => {
        //   dispatch({ type: LOADING_SIGNUP });
        console.log({ error });
      });
  };
}

export function login({ email, password }, success, error) {
  return (dispatch) => {
    //   dispatch({ type: types.LOADING });

    fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((raw) => raw.json())
      .then((data) => {
        if (data.success) {
          const { token } = data;
          getUserProfile(token)
            .then((resp) => {
              if (resp.success) {
                dispatch({ type: AUTH_USER, payload: resp });
                if (token) {
                  localStorage.setItem("@@token", token);
                }
                success(resp);
              }
            })
            .catch((err) => {
              error(err);
            });
        } else {
          dispatch({ type: ERROR_LOG, payload: data.message });
          error(data);
        }
      })
      .catch((err) => {
        //   dispatch({ type: LOADING_LOGIN });
        // console.log(err)
        error(err);
      });
  };
}

export async function getUserProfile(_token) {
  try {
    // console.log(_token);
    let response = await fetch(`${API_URL}/users/verify-token`, {
      method: "GET",
      headers: {
        authorization: _token,
      },
    });
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(JSON.stringify(error));
    return JSON.stringify(error);
  }
}

export function init(callback = (f) => f, error = f => f) {
  return (dispatch) => {
    let token = localStorage.getItem("@@token");

    if (token) {
      getUserProfile(token)
        .then((data) => {
          console.log({ data });
          if (data.success) {
            dispatch({ type: AUTH_USER, payload: data });
            callback();
            console.log(data);
          } else {
            error();
            // localStorage.removeItem("@@token");
            console.log("Token expired");
            dispatch({ type: LOGOUT });
          }
        })
        .catch((err) => {
          // console.log(err, 'wjehjyewhjwjhhwhjwe')

          console.log("Token is invalid");
          dispatch({ type: LOGOUT });
          error();
          // localStorage.removeItem("@@token");
        });
    } else {
      error();
      dispatch({ type: LOGOUT });
    }
  };
}

export function logout(history) {
  return (dispatch) => {
    localStorage.removeItem("@@token");
    dispatch({ type: LOGOUT });
    history("/login");
  };
}

export const getRoleLink = () => {
  return store.getState().auth.user.role || 'agent'
}