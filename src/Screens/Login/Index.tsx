import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../reduxStore/action/authActions";
import Login from "./components/Login";

const Index = () => {
  const dispatch: any = useDispatch();
  const loginSelector = useSelector((state: any) => state.login);
  const naigate = useNavigate()
  console.log("loginSelector", loginSelector);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (loginSelector?.authToken && loginSelector?.response?.status === 200) {
      naigate("/user-home");
    }
  }, [loginSelector]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(adminLogin(loginData));
  };

  const person = {
    firstName: "Mohit",
    lastName: "Mahajan",
  };

  const peopleList = [
    {
      firstName: "Mohit",
      lastName: "Mahajan",
    },
    {
      firstName: "Kamal",
      lastName: "P",
    },
    {
      firstName: "Pawan",
      lastName: "R",
    },
    {
      firstName: "Rajkuar",
      lastName: "Rao",
    },
  ];
  const name = "mohit";

  return (
    <div>
      <Login
        name={name}
        handleSubmit={handleSubmit}
        person={person}
        peopleList={peopleList}
        setLoginData={setLoginData}
        loginData={loginData}
      />
    </div>
  );
};

export default Index;
