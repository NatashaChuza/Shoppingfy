import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./state/store";

import MainPage from "./pages/MainPage";
import "./pages/common/styles.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App height_100 width_100">
          <MainPage />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
