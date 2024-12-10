import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/PostListProvider";

function App() {
  const [isActive, setIsActive] = useState("Home");

  return (
    <PostListProvider>
      <div className="root">
        <Sidebar isActive={isActive} setIsActive={setIsActive} />
        <div className="ctn">
          <Header />
          {isActive === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
