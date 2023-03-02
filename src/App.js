import { BrowserRouter } from "react-router-dom";
import ApiClient from "./ApiClient";

const App = () => {
  return(
    <BrowserRouter>
      <ApiClient/>
    </BrowserRouter>
  )
}

export default App;
