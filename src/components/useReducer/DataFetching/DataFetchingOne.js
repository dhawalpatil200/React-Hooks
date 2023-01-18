import axios from "axios";
import { useEffect, useState } from "react";

const DataFetchingOne = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setError("Something went WRONG....");
      });
  }, []);

  return (
    <div>
      {loading ? <div>Loading...</div> : post.title}
      {error ? error : null}
    </div>
  );
};

export default DataFetchingOne;
