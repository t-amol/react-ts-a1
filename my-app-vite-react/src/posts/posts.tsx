import axios from "axios";
import { useEffect, useState } from "react";

// make async call
// display the data in UI

type PostsProps = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const Posts = () => {
  const [posts, setPosts] = useState<PostsProps[]>([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        setPosts(response.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <h1> Posts </h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
