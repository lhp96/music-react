import { GlobalStyle } from "./style";
import { IconStyle } from "./assets/iconfont/iconfont";
import MyRouter from "./routes/index";

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <MyRouter></MyRouter>
    </div>
  );
}

export default App;
