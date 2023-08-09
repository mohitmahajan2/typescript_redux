import apiEndPoints from "../../utils/apiEndPoints";
import { apiCall } from "../../utils/httpClient";

const tokenGenrate = async () => {
  const tkn = await apiCall("get", apiEndPoints.JWTTOKEN);
  if (tkn.data.status == 200) {
    return tkn;
  } else {
    return null;
  }
};

const userLogin = async (data) => {
  const response = await apiCall("post", apiEndPoints.ADMINLOGIN, data);
  if (response.data.status == 200) {
    return response;
  } else {
    return response;
  }
};




const authService = {
  tokenGenrate,
  userLogin
};

export default authService;
