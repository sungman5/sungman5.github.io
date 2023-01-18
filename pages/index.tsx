import { getBullshittingsData, getStudiesData } from "../lib/getPostsData";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ allPosts }: any) {
    const router = useRouter();
    return (
        <>
            <section>
                {allPosts.map((post: any) => {
                    console.log("포스트", post);
                    return (
                        <>
                            <div className="articles">
                                <Link
                                    href={`/${post.category}/${post.id}`}
                                    key={post.id}
                                >
                                    <h2>{post.title}</h2>
                                    <p className="excerpt">{post.excerpt}</p>
                                    <p className="date">{post.date}</p>                                   
                                </Link>
                            </div>
                        </>
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
                    }
                `}
            </style>
        </>
    );
}

export async function getStaticProps() {
    const studiesPosts = getStudiesData();
    const bullshittingsPosts = getBullshittingsData();

    const allPosts = [...studiesPosts, ...bullshittingsPosts];

    console.log("올포스츠", allPosts);

    const sortAllPosts = allPosts.map((post) => {
        post;

        return {};
    });

    return {
        props: {
            allPosts,
        },
    };
}
