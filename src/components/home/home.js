import React from "react";

import PostList from "../post_list/post_list";
import PostModal from "../post_modal/post_modal";

const Home = () => {
  /*  const api_get_call = async () => {
    try {
      let res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {}
      );

      console.log("la info actualizada se puede ver aca:", res.data);
    } catch (err) {
      console.log("ERROR AL CONECTARSE CON LA BSE DE DATOS", err);
    }
  };
  useEffect(() => {
    api_get_call();
  }, []); */
  return (
    <div className="">
      <PostModal />
      <PostList />
    </div>
  );
};

export default Home;
