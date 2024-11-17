import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: [],
    total: 0,
  },
  reducers: {
    addProjectSuccess: (state, action) => {
      state.quantity += 1;
      state.projects.push(action.payload);
    },

    getProjectSuccess: (state, action) => {
      state.projects = action.payload;
    },

    updateProject: (state, action) => {
      state.isFetching = false;
      state.projects[
        state.projects.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.project;
    },

    removeProject: (state, action) => {
      let index = state.projects.indexOf(action.payload);
      state.total -= action.payload;
      state.projects.splice(index, 1);
      state.projects = [...state.projects];
    },
  },
});

export const { addProjectSuccess, getProjectSuccess, removeProject } =
  projectSlice.actions;
export default projectSlice.reducer;
