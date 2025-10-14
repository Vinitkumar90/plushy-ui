import { createSlice } from "@reduxjs/toolkit";

// Get initial state from localStorage if available
const getInitialState = () => {
  try {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  } catch (error) {
    return null;
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: getInitialState(),
  reducers: {
    addUser: (state, action) => {
      const userData = action.payload;
      // Save to localStorage for persistence
      localStorage.setItem("user", JSON.stringify(userData));
      return userData;
    },
    removeUser: (state, action) => {
      localStorage.removeItem("user");
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer; // This is ONE big function  HEAD CHEF

// This is the complete function that Redux uses to manage your entire slice of state.
// It knows how to handle ALL the actions you defined above.

// Reducers (plural) in a Slice = Individual functions that handle specific actions
// These are just functions that say "when this action happens, update state like this".
