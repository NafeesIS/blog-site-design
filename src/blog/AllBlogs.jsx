"use client"
import Image from "next/image";
import Container from "@/components/ui/Container";
import React, { useState } from "react";
import imgOne from "@/images/blog/Rectangle-5.png";

const blogData = [
  {
    category: "Design & Creative",
    date: "10 June 2023",
    title: "Lorem ipsum dolor sit amet consectetur",
    content: "Lorem ipsum dolor sit amet consectetur. Et bibendum nunc in amet auctor enim massa. Leo purus amet sem libero quisque.",
    author: "Jon Doe",
  },
  {
    category: "Design & Creative",
    date: "10 June 2023",
    title: "Lorem ipsum dolor sit amet consectetur",
    content: "Lorem ipsum dolor sit amet consectetur. Et bibendum nunc in amet auctor enim massa. Leo purus amet sem libero quisque.",
    author: "Jon Doe",
  },
  {
    category: "Design & Creative",
    date: "10 June 2023",
    title: "Lorem ipsum dolor sit amet consectetur",
    content: "Lorem ipsum dolor sit amet consectetur. Et bibendum nunc in amet auctor enim massa. Leo purus amet sem libero quisque.",
    author: "Jon Doe",
  },
  {
    category: "Design & Creative",
    date: "10 June 2023",
    title: "Lorem ipsum dolor sit amet consectetur",
    content: "Lorem ipsum dolor sit amet consectetur. Et bibendum nunc in amet auctor enim massa. Leo purus amet sem libero quisque.",
    author: "Jon Doe",
  },
  {
    category: "Design & Creative",
    date: "10 June 2023",
    title: "Lorem ipsum dolor sit amet consectetur",
    content: "Lorem ipsum dolor sit amet consectetur. Et bibendum nunc in amet auctor enim massa. Leo purus amet sem libero quisque.",
    author: "Jon Doe",
  },
  {
    category: "Design & Creative",
    date: "10 June 2023",
    title: "Lorem ipsum dolor sit amet consectetur",
    content: "Lorem ipsum dolor sit amet consectetur. Et bibendum nunc in amet auctor enim massa. Leo purus amet sem libero quisque.",
    author: "Jon Doe",
  },

];

const AllBlogs = () => {
    const [displayedBlogs, setDisplayedBlogs] = useState(3);
    const showMoreBlogs = () => {
      if (displayedBlogs === blogData.length) {
        setDisplayedBlogs(3); // Reset to initial state if all blogs are displayed
      } else {
        setDisplayedBlogs(displayedBlogs + 3); // Show next three blogs
      }
    };
  return (
    <Container className="md:mx-[75px] mx-4 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogData.slice(0, displayedBlogs).map((blog, index) => (
          <div key={index} className="h-full">
            <Image
              className="md:w-[630px] w-full h-[300px]"
              src={imgOne}
              alt={`blog-${index + 1}`}
            />
            <div className="p-5 bg-violet-50 flex-col md:h-[300px] lg:h-[320px] xl:h-[300px] justify-start items-start gap-5 inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-[15px] flex">
                <div className="space-x-3">
                  <span className="text-indigo text-sm font-medium uppercase leading-normal">
                    {blog.category}
                  </span>
                  <span>{blog.date}</span>
                </div>
                <div className="self-stretch text-indigo-950 text-2xl font-medium font-['Lora'] leading-[34px]">
                  {blog.title}
                </div>
                <div className="self-stretch text-zinc-500 text-base font-normal leading-relaxed">
                  {blog.content}
                </div>
              </div>
              <div className="self-stretch">
                <span className="text-zinc-500 text-base font-normal leading-relaxed">
                  by{" "}
                </span>
                <span className="text-zinc-500 text-base font-medium leading-relaxed">
                  {blog.author}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={showMoreBlogs}
          className="px-4 py-2 bg-transparent border border-indigo-600 text-indigo-600 rounded"
        >
          {displayedBlogs === blogData.length ? "Show Less" : "Load More"}
        </button>
        
      </div>
    </Container>
  );
};

export default AllBlogs;
