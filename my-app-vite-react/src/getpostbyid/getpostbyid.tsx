import axios from "axios";
import { useEffect, useState } from "react";

const GetPostById = () => {
  let [postId, setPostId] = useState("1");
  let [thePost, setThePost] = useState({
    id: 0,
    userId: 0,
    title: "",
    body: "",
  });
  useEffect(() => {
    // make utility functions & resuse
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        setThePost(response.data);
      })
      .catch(err => console.log(err));
  }, [postId]);
  return (
    <div>
      <label htmlFor="txtPostId">Enter Post Id : </label>
      <input
        type="text"
        id="txtPostId"
        onInput={(e: any) => setPostId(e.target.value)}
      />
      <p>{thePost.title}</p>
    </div>
  );
};

export default GetPostById;
