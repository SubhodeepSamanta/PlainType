import React, { useState, useEffect } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";
import { useQuery } from "@tanstack/react-query"; 
import { apiRequest } from "../utilities/apiRequest";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("PostListPage error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (() => {
        window.location.reload()
      }
      );
    }
    return this.props.children;
  }
}

const PostListContent = () => {
  const [searchParams]= useSearchParams();
  const [page, setPage] = useState(1);
  const [allPosts, setAllPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [open, setOpen] = useState(false);

  const searchParamsObj= Object.fromEntries([...searchParams]);
  const searchParamsString= searchParams.toString()
  useEffect(()=>{
    setPage(1);
    setAllPosts([]);
  },[searchParamsString])
  const { data, error, isLoading} = useQuery({
    queryKey: ["posts", page, searchParams.toString(), searchParamsObj],
    queryFn: async () => {
      try {
        const response = await apiRequest.get("/posts", {
          params: { page, limit: 5, ...searchParamsObj },
        });
        
        const data = response.data || {};
        return {
          posts: Array.isArray(data.posts) ? data.posts : [],
          hasMore: typeof data.hasMore === "boolean" ? data.hasMore : false
        };
      } catch (error) {
        console.error("Error fetching posts:", error);
        return { posts: [], hasMore: false };
      }
    },
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });

   useEffect(() => {
    if (data?.posts) {
      setAllPosts(prev => {
        const existingIds = new Set(prev.map(post => post._id)); 
        const newPosts = data.posts.filter(post => !existingIds.has(post._id)); 
        return [...prev, ...newPosts];
      });
      setHasMore(data.hasMore);
    }
  }, [data]);

  const fetchNextPage = () => {
    if (hasMore) {
      setPage(prev => prev + 1);
    }
  };

  if (isLoading && page === 1) {
    return <div className="p-4">Loading posts...</div>;
  }

  if (error) {
    return <div className="p-4">An error has occurred: {error.message}</div>;
  }

return (
  <div className="postlistpage">
    <h1 className="text-lg text-gray-700 mb-4 ml-2">Here's a calm corner of the internet for words, code, and clarity.</h1>
    <button
      className="bg-blue-500 text-white block md:hidden py-1 px-4 rounded-full mb-4"
      onClick={() => setOpen((prev) => !prev)}
    >
      Filter
    </button>
    <div
      className={`content flex gap-8 ${
        open ? "flex-col-reverse md:flex-row" : ""
      }`}
    >
      <div className="posts">
        {allPosts.length > 0 ? (
          <InfiniteScroll
            dataLength={allPosts.length}
            next={fetchNextPage}
            hasMore={hasMore}
            loader={<h4>Loading more posts...</h4>}
            endMessage={
              <p>
                <b>All Posts loaded!</b>
              </p>
            }
          >
            {allPosts.map((post, index) => (
              <PostList key={`${post._id || 'post'}-${index}`} post={post} />
            ))}
          </InfiniteScroll>
        ) : (
          isLoading ? <div>Loading posts...</div> : <div>No posts found</div>
        )}
      </div>
      <div
        className={`sidemenu ${
          open ? "block" : "hidden"
        } md:flex flex-col md:`}
      >
        <SideMenu />
      </div>
    </div>
  </div>
);
};

const PostListPage = () => {
  return (
    <ErrorBoundary>
      <PostListContent />
    </ErrorBoundary>
  );
};

export default PostListPage;