import { getPostsData } from "../lib/getPostsData";
import Link from "next/link";
import { useRouter } from "next/router";

const worksPostPath = "posts/works";
const devPostPath = "posts/dev";
const otherPostPath = "posts/other";

export default function Home({
    lastestWorksPosts,
    lastestDevPosts,
    lastestOtherPosts,
}: any) {
    const router = useRouter();
    return (
        <>
            <section>
                <div className="articles">
                    <div>
                        <h1 className="cat-name">Dev.</h1>
                        {lastestDevPosts.length === 0 ? (
                            <p className="no-have-post">
                                작성된 포스트가 없습니다. 🥺
                            </p>
                        ) : (
                            lastestDevPosts.map((devPost: any) => {
                                return (
                                    <>
                                        <Link
                                            href={`/dev/${devPost.id}`}
                                            key={devPost.id}
                                        >
                                            <h2>{devPost.title}</h2>
                                            <p>{devPost.excerpt}</p>
                                        </Link>
                                    </>
                                );
                            })
                        )}
                    </div>

                    <Link href="/dev">
                        <span className="read-more">전체보기</span>
                    </Link>
                </div>

                <div className="articles">
                    <div>
                        <h1 className="cat-name">Works</h1>
                        {lastestWorksPosts.length === 0 ? (
                            <p className="no-have-post">
                                작성된 포스트가 없습니다. 🤣
                            </p>
                        ) : (
                            lastestWorksPosts.map((workPost: any) => {
                                return (
                                    <>
                                        <Link
                                            href={`/works/${workPost.id}`}
                                            key={workPost.id}
                                        >
                                            <h2>{workPost.title}</h2>
                                            <p>{workPost.excerpt}</p>
                                        </Link>
                                    </>
                                );
                            })
                        )}
                    </div>

                    <Link href="/works">
                        <span className="read-more">전체보기</span>
                    </Link>
                </div>

                <div className="articles">
                    <div>
                        <h1 className="cat-name">Other</h1>
                        {lastestOtherPosts.length === 0 ? (
                            <p className="no-have-post">
                                작성된 포스트가 없습니다. 😎
                            </p>
                        ) : (
                            lastestOtherPosts.map((otherPost: any) => {
                                return (
                                    <>
                                        <Link
                                            href={`/other/${otherPost.id}`}
                                            key={otherPost.id}
                                        >
                                            <h2>{otherPost.title}</h2>
                                            <p>{otherPost.excerpt}</p>
                                        </Link>
                                    </>
                                );
                            })
                        )}
                    </div>
                    <Link href="/other">
                        <span className="read-more">전체보기</span>
                    </Link>
                </div>
            </section>
            <style jsx>
                {`
                    h1 {
                        font-size: 3.2rem;
                        font-weight: 200;
                        margin-bottom: 3.2rem;
                    }
                    div {
                        margin-bottom: 4rem;
                    }
                    h2 {
                        font-size: 1.7rem;
                        font-weight: 500;
                        margin-bottom: 0.4rem;
                    }
                    a {
                        margin-bottom: 2.4rem;
                    }
                    a:hover {
                        color: red;
                    }
                    p,
                    span {
                        font-size: 1.67rem;
                        line-height: 2.4rem;
                        color: #323232;
                    }
                    .read-more {
                        text-decoration: underline;
                    }
                    ul {
                        margin-bottom: 2rem;
                    }
                    .no-have-post {
                        color: #a1a1a1;
                        margin-bottom: 1.6rem;
                    }
                `}
            </style>
        </>
    );
}

export async function getStaticProps() {
    const lastestWorksPosts = getPostsData(worksPostPath);
    const lastestDevPosts = getPostsData(devPostPath);
    const lastestOtherPosts = getPostsData(otherPostPath);

    return {
        props: {
            lastestWorksPosts,
            lastestDevPosts,
            lastestOtherPosts,
        },
    };
}
