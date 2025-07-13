import React, { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";
import { useInfiniteQuery } from "@tanstack/react-query";
import { apiRequest } from "../utilities/apiRequest";
import InfiniteScroll from "react-infinite-scroll-component";

const PostListPage = () => {
  const getPosts = async (pageParam) => {
    const response = await apiRequest.get("/posts", {
      params: { page: pageParam, limit: 5 },
    });
    return response.data;
  };
  const [open, setOpen] = useState(false);

  const { data, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["posts"],
      queryFn: ({ pageParam = 1 }) => getPosts(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) =>
        lastPage.hasMore ? pages.length + 1 : undefined,
    });


  if (error) return "An error has occurred: " + error.message;

  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];
  return (
    <div className="postlistpage">
      <h1 className="text-2xl text-gray-700 mb-4">Development Blog</h1>
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
          <InfiniteScroll
            dataLength={allPosts.length}
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p>
                <b>All Posts loaded!</b>
              </p>
            }
          >
            {allPosts.map((post) => (
              <PostList key={post._id} post={post} />
            ))}
          </InfiniteScroll>
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

export default PostListPage;
