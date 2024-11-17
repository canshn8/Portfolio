import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "./userSlice";
import { addProjectSuccess, getProjectSuccess } from "./projectSlice";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const logout = async (dispatch, user) => {
  try {
    const res = await axios.post("/auth/logout", user);
    dispatch(logout(res.data));
  } catch {}
};

export const addProject = async (project, dispatch) => {
  try {
    const res = await axios.post(`/project`, project);
    dispatch(addProjectSuccess(res.data));
  } catch {}
};

export const getProject = async (dispatch) => {
  try {
    const res = await axios.get("/project");
    dispatch(getProjectSuccess(res.data));
  } catch {}
};
