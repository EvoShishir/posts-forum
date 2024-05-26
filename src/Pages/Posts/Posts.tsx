import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import PostContainer from "../../Components/PostContainer/PostContainer";
import useFetchPosts from "../../hooks/useFetchPosts";
import "./Posts.css";

export default function Posts() {
  const { data: posts, isLoading } = useFetchPosts();

  return (
    <section className="postPage">
      <h1>All Posts:</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {isLoading && <LoadingSpinner />}
        {!isLoading &&
          posts &&
          posts.map((post) => <PostContainer post={post} key={post.id} />)}
      </div>
    </section>
  );
}
