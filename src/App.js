import "./App.css";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
function App() {
  return (
    <div
      className="container"
      test="test"
      test2="test"
      test3="test"
      test4="test"
    >
      <h1>Create Post</h1>
      <CreatePost />
      <hr />
      <PostList />
    </div>
  );
}

export default App;
