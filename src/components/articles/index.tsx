import React from "react";
import CardProvider from "../card-provider";
import { FaNewspaper } from "react-icons/fa";
import { Articledata } from "../../mock";
import { ArticleItem } from "./ArticleItem";

const Articles = () => {
  return (
    <CardProvider>
      <span className="flex items-center gap-2 mr-auto">
        <FaNewspaper
          size={25}
          className="bg-[#0769DE] text-white p-1 rounded-4xl"
        />
        <p className="text-lg font-bold">Related Articles</p>
      </span>
      {Articledata.map((item, index) => (
        <ArticleItem
          key={index}
          imageSrc={item.imageSrc}
          link={item.link}
          title={item.title}
          author={item.author}
          date={item.date}
          category={item.category}
          views={item.views}
          excerpt={item.excerpt}
          tags={item.tags}
        />
      ))}
    </CardProvider>
  );
};

export default Articles;
