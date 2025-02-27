import Timer from "./components/useEffect";
import MyCounter from "./components/UseState";
import InputFocus from "./components/useRef";

function App() {
  return (
    <div className="App">
      <MyCounter/>
      <Timer/> 
      <InputFocus/>
    </div>
  );
}

export default App;
