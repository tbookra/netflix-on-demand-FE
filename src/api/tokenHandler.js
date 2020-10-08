export const getToken = () => {
  let token = localStorage.getItem("token");
  return token;
};

export const setToken = (token) => localStorage.setItem("token", token);

export const removeToken = () => localStorage.removeItem("token");
