import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { PostApiResponse } from "../utils/types";

export const readPostInfo = (): PostApiResponse => {
  const dirPathToRead = path.join(process.cwd(), "posts");
  const dirs = fs.readdirSync(dirPathToRead);
  const data = dirs.map((filename) => {
    const filePathToRead = path.join(process.cwd(), "posts/" + filename);
    const fileContent = fs.readFileSync(filePathToRead, { encoding: "utf-8" });
    return matter(fileContent).data;
  });
  return data as PostApiResponse;
};

// const { postInfo }: PostApiResponse = await fetch(
//   "http://localhost:3000/api/posts"
// ).then((data) => data.json());
