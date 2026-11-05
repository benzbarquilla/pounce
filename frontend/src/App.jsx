import { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  const [status, setStatus] = useState("Checking API...");

  useEffect(() => {
    api
      .get("/applications")
      .then((res) => setStatus(`API responded with status ${res.status}`))
      .catch((err) =>
        setStatus(
          err.response
            ? `API responded with status ${err.response.status}`
            : "Could not reach the API",
        ),
      );
  }, []);

  return (
    <>
      <div className="min-h-screen bg-violet-50 p-8">
        <h1 className="text-3xl font-bold text-violet-700">{status}</h1>
      </div>{" "}
    </>
  );
}

export default App;
