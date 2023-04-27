import axios from 'axios';
import './App.css';

function App() {

  const handleLogin = async () => {
    try {
      const res = await axios.get("https://manish.in.ngrok.io/accounts/login");
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <div
        style={{
          height: "100vh",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <button
          onClick={handleLogin}
        >
          Login
        </button>
      </div>

    </>
  );
}

export default App;
