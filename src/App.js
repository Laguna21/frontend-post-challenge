//import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { ContextProvider } from "./context/main_context";
import Home from "./components/home/home";

function App() {
  return (
    <ContextProvider>
      <div className="App container d-flex justify-content-center">
        <Home />
      </div>
    </ContextProvider>
  );
}

export default App;
