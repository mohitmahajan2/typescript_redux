import axios from "axios";
import { GLOBAL_URL } from "./constants";
import EndPoints from "./apiEndPoints";
import { toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const httpClient = axios.create({
  baseURL: `${GLOBAL_URL}/api/`,
});

export function updateLocalstorage(name, key, value) {
  var DashboardData = localStorage.getItem(name);
  DashboardData = DashboardData ? JSON.parse(DashboardData) : {};
  DashboardData[key] = value;
  localStorage.setItem(name, JSON.stringify(DashboardData));
}

export function setDefaultHeader(header, value) {
  httpClient.defaults.headers.common[header] = value;
}

export function setDefaultHeaderval(header, value) {
  const authval = localStorage.getItem("AuthToken");
  if (authval) {
    setDefaultHeader("token", authval);
  } else {
    const tokenlocal = localStorage.getItem("token");
    if (tokenlocal) {
      setDefaultHeader("token", tokenlocal);
    } else {
      getToken();
    }
  }
}

async function getToken() {
  try {
    const { data } = await apiCall("get", EndPoints.JWTTOKEN);
    if (data) {
      await setDefaultHeader("token", data.token);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function apiCall(
  method,
  url,
  data,
  header = {
    "Content-Type": "application/json",
    "access-control-allow-origin": "*",
  }
) {
  try {
    const authval = await localStorage.getItem("userToken");
    let headers = header;
    if (authval !== null) {
      headers = { ...header, token: JSON.parse(authval).token };
    }
    window.document.getElementById("loaderoverlay").style.display = "block";
    window.document.getElementById("root").style.display = "none";
    const response = await httpClient({
      method,
      url,
      data,
      headers: headers,
      withCredentials: false,
    });
    console.log(`${url}: `, response);
    // window.document.getElementById("loaderoverlay").style.display = "none";
    // window.document.getElementById("root").style.display = "block";
    if (response.status === 200) {
      window.document.getElementById("root").style.display = "block";
      window.document.getElementById("loaderoverlay").style.display = "none";
      return response;
    }
    if (response.status === 201) {
      window.document.getElementById("loaderoverlay").style.display = "none";
      window.document.getElementById("root").style.display = "block";

      return response;
    } else {
      window.document.getElementById("loaderoverlay").style.display = "none";
      window.document.getElementById("root").style.display = "block";
    }
  } catch (error) {
    window.document.getElementById("loaderoverlay").style.display = "none";
    window.document.getElementById("root").style.display = "block";
    if (error.response) {
      if (error.response.status === 401) {
        console.log(`${url}: `, error.response);
        return error.response;
      }
      console.log("Error data : ", error.response.data);
      console.log("Error status : ", error.response.status);
      console.log("Error headers : ", error.response.headers);
    } else if (error.request) {
      console.log("Error request : ", error.request);
    } else {
      console.log("Error message : ", error.message);
    }
    console.log("Error config", error.config);
    // console.log("errorresponse", error.response);
    console.log("Error", error);
    return false;
  }
}

export const successToast = (msg) => {
  toast.success(msg, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Flip,
  });
};
export const errorToast = (msg) => {
  toast.error(msg, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Flip,
  });
};
export const warnToast = (msg) => {
  toast.warn(msg, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export const infoToast = (msg) => {
  toast.info(msg, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const unAuthorizedError = (data) => {
  toast.error(data.message, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Flip,
  });
  if (data.status === 401 || data.status === 400 || data.status === 403) {
    // store.dispatch(userLogout());
    window.localStorage.clear();
    window.location.reload();
  }
};
