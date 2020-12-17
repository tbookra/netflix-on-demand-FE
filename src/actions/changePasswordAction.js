import * as authTypes from "./authTypes";

export const setChangePassword = (change) => {
  return {
    type: authTypes.CHANGE_PASSWORD,
    payload: change,
  };
};
