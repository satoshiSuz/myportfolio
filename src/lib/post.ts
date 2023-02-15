import path from 'path';
import fs from 'fs';
import matter, { GrayMatterFile } from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

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
    // console.log(data);
    //idとデータを返す
    return {
      id,
      ...data,
    };
  });
  return allPostsData as PostData[];
};

//getStaticPathでreturnで使うpathを取得する
export const getAllPostsIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
};

//idに基づいてブログ投稿データを返す

export const getPostData = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContent);

  const blogContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);

  const blogContentHTML = blogContent.toString();
  return {
    id,
    blogContentHTML,
    ...matterResult.data,
  };
};
