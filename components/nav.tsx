import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { readyAlert } from "../lib/ready_alert";

export default function Nav() {
    const router = useRouter();
    console.log(router);
    return (
        <>
            <nav>
                <ul className="nav-list">
                    <Link href={"/"}>
                        <li
                            style={{
                                color:
                                    router.pathname === `/`
                                        ? "#0969da"
                                        : `#6e7781`,
                                textDecoration:
                                    router.pathname === `/`
                                        ? "underline"
                                        : `none`,
                            }}
                            className="nav-item"
                        >
                            all
                        </li>
                    </Link>
                    <Link href={"/studies"}>
                        <li
                            style={{
                                color:
                                    router.pathname === `/studies` ||
                                    router.asPath ===
                                        `/studies/${router.query.id}`
                                        ? "#0969da"
                                        : `#6e7781`,
                                textDecoration:
                                    router.pathname === `/studies` ||
                                    router.asPath ===
                                        `/studies/${router.query.id}`
                                        ? "underline"
                                        : `none`,
                            }}
                            className="nav-item"
                        >
                            study
                        </li>
                    </Link>
                    <Link href={"/memo"}>
                        <li
                            style={{
                                color:
                                    router.pathname === "/memo" ||
                                    router.asPath ===
                                        `/memo/${router.query.id}`
                                        ? "#0969da"
                                        : `#6e7781`,
                                textDecoration:
                                    router.pathname === "/memo" ||
                                    router.asPath ===
                                        `/memo/${router.query.id}`
                                        ? "underline"
                                        : `none`,
                            }}
                            className="nav-item"
                        >
                            memo
                        </li>
                    </Link>
                    <Link
                        href={`#`}
                        onClick={readyAlert}
                        // target={"_blank"}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                        }}
                    >
                        <li className="nav-item" style={{ color: "#6e7781" }}>
                            works
                        </li>
                        <Image
                            src={"/img/iconmonstr-external-link-thin.svg"}
                            width={14}
                            height={14}
                            alt={"open in new"}
                            style={{ margin: 0 }}
                        />
                    </Link>
                    <Link href={"/about"}>
                        <li
                            style={{
                                color:
                                    router.pathname === `/about`
                                        ? "#0969da"
                                        : `#6e7781`,
                                textDecoration:
                                    router.pathname === `/about`
                                        ? "underline"
                                        : `none`,
                            }}
                            className="nav-item"
                        >
                            about
                        </li>
                    </Link>
                </ul>
            </nav>
            <style jsx>
                {`
                    nav {
                        overflow-x: scroll;
                    }
                    .nav-list {
                        display: flex;
                        gap: 3rem;
                        align-item: center;
                    }
                    .nav-item {
                        font-size: 1.8rem;
                        font-family: "Fira Code", monospace;
                    }
                    li {
                        list-style: none;
                        text-indent: 0;
                        text-indent: -2rem;
                        list-style-position: inside;
                        padding-left: 2.4rem;
                    }
                `}
            </style>
        </>
    );
}
