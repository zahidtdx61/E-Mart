import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div className="w-screen h-screen flex">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
