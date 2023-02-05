import { NewsContextProvider } from "./context/NewsProvider";
import { Router } from "./router/router-app";


function App() {
  return (
    <NewsContextProvider>
      <Router/>
    </NewsContextProvider>
  );
}

export default App;
