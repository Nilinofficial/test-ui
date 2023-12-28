import axios from 'axios';

const uri = process.env.NEXT_PUBLIC_API;
const client = axios.create({ baseURL: uri });

export const request = ({ ...options }) => {
  const token = getCookie("token"); // Get the token from cookies

  // Check if a token exists before setting the Authorization header
  if (token) {
    console.log("token present");
    client.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  return client(options);
};

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift();
  }
}
