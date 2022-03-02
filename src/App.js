import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./pages/counter";
import FakePage from "./pages/fake_data";
import NoMatch from "./pages/nomatch";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import { store } from "./store";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <BrowserRouter>
          <Routes>
            <Route index element={<Page1 />}></Route>
            <Route path="/page1" element={<Page1 />}></Route>
            <Route path="/page2/:id" element={<Page2 />}></Route>
            <Route path="/counter" element={<Counter />}></Route>
            <Route path="/fake-data" element={<FakePage />}></Route>
            <Route path="*" element={<NoMatch />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
