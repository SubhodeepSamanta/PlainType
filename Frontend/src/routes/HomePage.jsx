import React from "react";
import { Link } from "react-router-dom";
import MainCategory from "../components/MainCategory";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="breadCrumbs flex text-sm mb-4 md:mb-0">
        <Link to="/" className="text-gray-700">
          Home
        </Link>
        <span className="mx-3 text-gray-500">•</span>
        <p className="text-blue-800">Blogs and Articles</p>
      </div>
      <div className="introduction relative flex items-center gap-8">
        <div className="left flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="mt-6 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            dignissimos ea.
          </p>
        </div>
        <Link to="write" className="hidden md:block relative flex-shrink-0">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center  cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
      <MainCategory/>
      <FeaturedPosts/>
      <PostList/>
    </div>
  );
};

export default HomePage;
