import { FC } from "react";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  slug: string;
}

const BlogCard: FC<Props> = ({ title, description, slug }): JSX.Element => {
  return (
    <Link href={"/blogs/" + slug} legacyBehavior>
      {/* To show in the bottom left of the window the url */}
      <a className="block">
        <div className="bg-green-100 p-2 rounded cursor-pointer">
          <h1 className="text-gray-900 text-3xl font-semibold">{title}</h1>
          <p className="text-gray-500">{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
