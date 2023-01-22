import Link from "next/link";
import { getMemoData } from "../../lib/getPostsData";

export default function memoIndex({ sortedAllPosts }: any) {
    return (
        <>
            <section>
                {sortedAllPosts.length === 0 ? (
                    <p>이런, 아직 작성된 포스트가 없습니다. 🤪</p>
                ) : (
                    sortedAllPosts.map((post: any) => {
                        return (
                            <article className="articles" key={post.id}>
                                <Link href={`/memo/${post.id}`}>
                                    <h2>{post.title}</h2>
                                    <p className="excerpt">{post.excerpt}</p>
                                </Link>
                            </article>
                        );
                    })
                )}
            </section>
            <style jsx>
                {`
                    h2 {
                        font-size: 1.8rem;
                        font-weight: 600;
                    }
                    .articles {
                        margin-bottom: 2.4rem;
                    }
                    .date {
                        font-family: "Fira Code", monospace;
                        font-size: 1.4rem;
                    }
                    .category {
                        color: rgb(48, 115, 179);
                    }
                    .excerpt {
                        font-size: 1.5rem;
                        font-weight: 400;
                        color: #6e7781;
                        line-height: 140%;
                        margin-bottom: 0.4rem;
                    }
                `}
            </style>
        </>
    );
}

export async function getStaticProps() {
    const memoPosts = getMemoData();
    const sortedAllPosts = memoPosts.sort((a: any, b: any) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });

    return {
        props: {
            sortedAllPosts,
        },
    };
}
