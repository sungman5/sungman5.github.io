import { readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
remarkRehype;
import { unified } from "unified";
import Comments from "../../lib/utterances";

const memo = "posts/memo";

export default function OtherPost({ postData }: any) {
    return (
        <>
            <article>
                <div className="article-header">
                    <h1 className="title">{postData.title}</h1>
                    <p className="excerpt">{postData.excerpt}</p>
                    <p className="date">{postData.date}</p>
                </div>
                <div
                    className="markdown-body"
                    dangerouslySetInnerHTML={{
                        __html: postData.contentHtml,
                    }}
                />
                <Comments />
            </article>            
        </>
    );
}

export async function getStaticPaths() {
    const fs = require("fs");
    const files = fs.readdirSync(memo);
    const paths = files.map((element: any) => {
        return {
            params: {
                id: element.replace(/\.md$/, ""),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

//getStaticPaths 에서 얻은 params.id 값을 가진 파일을 경로로부터 만들기
export async function getStaticProps({ params }: any) {
    // 주어진 params를 활용해 정확한 파일 읽기
    const id = params.id;
    const filePath = path.join(memo, `${id}.md`);
    const fileContents = readFileSync(filePath, "utf-8");
    const markdown = matter(fileContents);

    {
        console.log("파일콘텐츠", fileContents);
        console.log("마크다운", markdown);
    }

    const processedContent = await unified()
        .use(remarkGfm)
        .use(remarkParse)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeSlug)
        .use(rehypeStringify)
        .process(markdown.content);

    const contentHtml = processedContent.toString();

    return {
        props: {
            postData: {
                id,
                contentHtml,
                ...markdown.data,
            },
        },
    };
}
