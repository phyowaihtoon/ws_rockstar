import { useEffect, useState } from "react";
import { useApp } from "../AppProvider";
import Item from "../components/Item";
import Form from "../components/Form";
import { Typography } from "@mui/material";
import { useQuery,useMutation,useQueryClient } from "react-query";
const api="http://localhost:8088/posts";

async function fetchPosts() {
  const res = await fetch(api);

  return res.json();
}

async function deletePost(id) {
  const res = await fetch(`${api}/${id}`,{
    method:'DELETE'
  });

  return res.json();
}


export default function Home() {
  const {data,error,isLoading} = useQuery("posts", fetchPosts);
  const queryClient = useQueryClient();

  /*
  useEffect(() => {
    fetch(api).then( async res => {
      const data=await res.json();
      setPosts(data);
      setIsLoading(false);
    });
  },[]);
  */

  const remove = useMutation(deletePost,{
    onMutate : id => {
      queryClient.setQueryData("posts", old => {
        return old.filter( post => {
          post.id != id;
        });
      });
    },

    /*
    onSuccess : async () => {
      await queryClient.cancelQueries();
      await queryClient.invalidateQueries("posts");
    }
    */
  });



/*
  const add = (content) => {
    const id = posts[0].id + 1;
    setPosts([{ id, content, user: "Alice" }, ...posts]);
  };
*/

  const { showForm } = useApp();

  if(isLoading){
    return <Typography>Loading...</Typography>;
  }

  return <>
      {showForm && <Form/>}

      {data.map((post) => (
        <Item key={post.id} item={post} remove={remove.mutate}></Item>
      ))}
    </>
  
}
