import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(() => setMsg("Could not reach backend"));
  }, []);

  return (
    <div>
      <h1>LocalPick Frontend</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
