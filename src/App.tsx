import "./App.css";
import Canvas from "./components/Canvas";

const App = () => {
  return (
    <>
      <ol className="layer_list">
        <li className="layer ">
          <Canvas
            width={window.innerWidth}
            height={window.innerHeight}
            backgroundColor={"#f4d8ca"}
            style={{}}
          />
        </li>
      </ol>
    </>
  );
};

export default App;
