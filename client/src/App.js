import { React, Component } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {
  Mainpage,
} from "./pages/Routes";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Mainpage />}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}
export default App;