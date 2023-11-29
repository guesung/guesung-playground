import { createContext, useContext } from "react";
import "./App.css";

const MyContext = createContext();

function App() {
  return (
    <MyContext.Provider value="Hello">
      <GrandParent />
    </MyContext.Provider>
  );
}

function GrandParent() {
  return <Parent />;
}

function Parent() {
  return <Child />;
}

function Child() {
  const value = useContext(MyContext);
  return <h1>{value}</h1>;
}

export default App;
