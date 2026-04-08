import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
function App() {
  return (
    <>
      <Header />
      <Button text={"메일"} color={"red"} />
      <Button text={"쇼핑"} color={"green"} />
      <Button text={"카페"}>
        <div> 안녕 </div>
      </Button>
    </>
  );
}

export default App;
