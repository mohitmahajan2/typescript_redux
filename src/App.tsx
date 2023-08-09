import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { jwtTokenGenrate } from './reduxStore/action/authActions';
import { setDefaultHeader } from './utils/httpClient';
import Routers from './Routes';


function App() {
  const dispatch:any = useDispatch()
  const loginSelector = useSelector((state:any) => state.login);
  const loader = window.document.getElementById("loaderoverlay");
  const [loaderEle, setLoaderEle] = useState(loader);

  useEffect(() => {
    if (loader !== null &&  (loader.style.display) === "block" ) {
      setTimeout(() => {
        loader.style.display = "none" ;
      }, 5000);
    }
  }, [loaderEle]);

  useEffect(() => {
    const {response} = loginSelector
    if (response == null) {
      tokenGenrate();
    } else {
      if (response?.status === 200) {
        setDefaultHeader("token", response?.token);
      }
    }
  }, [loginSelector]);

  async function tokenGenrate() {
    console.log('call');
    dispatch(await jwtTokenGenrate());
  }
  return (
    <div className="App">
      <Routers/>
    </div>
  );
}

export default App;
