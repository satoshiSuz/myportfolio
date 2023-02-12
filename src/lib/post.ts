import path from 'path';
import fs from 'fs';
import matter, { GrayMatterFile } from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/posts');

//mdファイルのデータを取り出す
type PostData = {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
};
export const getPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ''); //ファイル名(id)

    //マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);
    console.log(data);
    //idとデータを返す
    return {
      id,
      ...data,
    };
  });
  return allPostsData as PostData[];
};
