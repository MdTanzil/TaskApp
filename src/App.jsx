import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TaskSheet from "./components/task/TaskSheet";

function App() {
  // const [isModalShow, setIsModalShow] = useState(false);

  return (
    <div
      className={`bg-[#191D26] font-[Inter] text-white flex justify-center flex-col `}
    >
      <Header></Header>
      <div className=" flex flex-col justify-center items-center relative">
        <Hero></Hero>
        <TaskSheet></TaskSheet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
