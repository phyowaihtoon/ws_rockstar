import { ScrollView,Text } from "react-native";

import Item from "../components/Item";
import { useQuery, useQueryClient } from "react-query";
import Post from "../model/Post";
const api = "http://172.30.27.119:8088/posts";

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(api);
  return res.json();
}

async function deletePost(id:number) {
	const res = await fetch(`${api}/${id}`,{
	  method:'DELETE'
	});
  
	return res.json();
  }

export default function Index() {
  const { data, error, isLoading } = useQuery<Post[]>("posts", fetchPosts);

  if(isLoading) return <Text>Loading...</Text>

  if(!data) return <Text>No Data</Text>;

  return (
    <ScrollView>
      {data.map((post: Post) => (
        <Item key={post.id} item={post}></Item>
      ))}
    </ScrollView>
  );
}
