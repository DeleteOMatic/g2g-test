import React from "react";
import PostList from "./components/PostList";
import AwesomeTxt from "./components/AwesomTxt"
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <div className="ui container">
      <AwesomeTxt />
      <PostList />
    </div>
  );
};

export default App;
