import { useQuery } from "@tanstack/react-query";
import client from "../Client/Client";

const fetchPostsWithUserDetails = async () => {
  const postsResponse = await client.get("/posts");
  const posts = postsResponse.data;

  const postsWithUserDetails = await Promise.all(
    posts.map(async (post: Post) => {
      const userResponse = await client.get(`/users/${post.userId}`);
      const user = userResponse.data;
      return { ...post, user };
    })
  );

  postsWithUserDetails.sort((a, b) => b.id - a.id);

  return postsWithUserDetails;
};

function useFetchPosts() {
  return useQuery({
    queryKey: ["postData"],
    queryFn: fetchPostsWithUserDetails,
  });
}

export default useFetchPosts;
