import Link from "next/link";
import { getStudiesData } from "../../lib/getPostsData";

export default function StudiesIndex({ sortedAllPosts }: any) {
    return (
        <>
            <section>
                {sortedAllPosts.map((post: any) => {
                    return (
                        <article className="articles" key={post.id}>
                            <Link href={`/studies/${post.id}`}>
                                <h2>{post.title}</h2>
                                <p className="excerpt">{post.excerpt}</p>
                            </Link>
                        </article>
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
                `}
            </style>
        </>
    );
}

export async function getStaticProps() {
    const studiesData = getStudiesData();
    const sortedAllPosts = studiesData.sort((a: any, b: any) => {
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
