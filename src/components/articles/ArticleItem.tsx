import Image from "next/image";
import Link from "next/link";

export const ArticleItem = ({
  imageSrc,
  link,
  title,
  author,
  date,
  category,
  views,
  excerpt,
  tags,
}: {
  imageSrc: string;
  link: string;
  title: string;
  author: string;
  date: string;
  category: string;
  views: number;
  excerpt: string;
  tags: string[];
}) => (
  <div className="flex w-full gap-2 items-center p-4 border-b">
    <Image
      src={imageSrc}
      alt="article"
      width={100}
      height={100}
      className="rounded-xl"
    />
    <div className="flex flex-col gap-3 h-full">
      <Link href={link} className="text-[#0769DE]">
        {category}
      </Link>
      <p className="text-lg font-bold">{title}</p>
      <span className="text-[#525A67] text-sm">
        {author} • {date}
      </span>
      <p className="text-sm text-gray-600">{excerpt}</p>
      <div className="flex gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs text-[#0769DE]">
            #{tag}
          </span>
        ))}
      </div>
      <div className="text-sm text-[#525A67]">Views: {views}</div>
    </div>
  </div>
);
