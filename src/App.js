import logo from "./logo.svg";
import "./App.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebase.config";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";

function App() {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();
  const login = async () => {
    // const response = await signInWithPopup(firebaseAuth, provider);
    const {
      user: { refreshToken, providerData },
    } = await signInWithPopup(firebaseAuth, provider);

    // console.log(response);

    dispatch({ type: actionType.SET_USER, user: providerData[0] });
    localStorage.setItem("user", JSON.stringify(providerData[0]));
  };
  return (
    <div className="App">
      <p>Demo</p>
      <button onClick={login}>Click Me</button>
      {user && <img src={user.photoURL}></img>}
    </div>
  );
}

export default App;
