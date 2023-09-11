import logo from "./logo.svg";
import "./App.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebase.config";

function App() {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const login = async () => {
    const response = await signInWithPopup(firebaseAuth, provider);
    console.log(response);
  };
  return (
    <div className="App">
      <p>Demo</p>
      <button onClick={login}>Click Me</button>
    </div>
  );
}

export default App;
