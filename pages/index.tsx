import { getMemoData, getStudiesData } from "../lib/getPostsData";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ sortedAllPosts }: any) {
    const router = useRouter();
    return (
        <>
            <section>
                {sortedAllPosts.map((post: any) => {
                    return (
                        <div className="articles" key={post.id}>
                            <Link href={`/${post.category}/${post.id}`}>
                                <h2>{post.title}</h2>
                                <p className="excerpt">{post.excerpt}</p>
                            </Link>
                        </div>
                    );
                })}
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
                    .category {
                        color: rgb(48, 115, 179);
                    }
                `}
            </style>
        </>
    );
}

export async function getStaticProps() {
    // const fs = require('fs')
    const studiesPosts = getStudiesData();
    const memoPosts = getMemoData();

    const allPosts = [...studiesPosts, ...memoPosts];
    const sortedAllPosts = allPosts.sort((a, b) => {
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
