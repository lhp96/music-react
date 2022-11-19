import { GlobalStyle } from "./style";
import { useState } from "react";
import { IconStyle } from "./assets/iconfont/iconfont";

function App() {
  return (
    <div className="App">
      <div className="card">
        <h1>Vite + React</h1>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <i className="iconfont">&#xe62b;</i>
    </div>
  );
}

export default App;
