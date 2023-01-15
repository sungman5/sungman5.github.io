import "../styles/globals.css";
import type { AppProps } from "next/app";
import SiteFooter from "../components/layouts/SiteFooter";
import SiteHeader from "../components/layouts/SiteHeader";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main>
            <SiteHeader />
            <Component {...pageProps} />
            <SiteFooter />
            <style jsx global>{`
                //fira code
                @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap");
                @font-face {
                    font-family: "DungGeunMo";
                    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff")
                        format("woff");
                    font-weight: normal;
                    font-style: normal;
                }

                * {
                    padding: 0;
                    margin: 0;
                    font-size: 10px;
                    font-family: "SUIT", sans-serif;
                    // font-family: "Pretendard Variable", Pretendard,
                    //     -apple-system, BlinkMacSystemFont, system-ui, Roboto,
                    //     "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
                    //     "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
                    //     "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

                    list-style: none;
                    line-height: 160%;
                    text-decoration: none;
                    color: #323232;
                    word-break: keep-all;
                    box-sizing: border-box;
                }
                html {
                    padding: 24px;
                    height: 100%;
                }

                body {
                    max-width: 129.6rem;
                    margin: auto;
                    height: 100%;
                }
                main {
                    height: 100%;
                }
                section {
                    height: 100%;
                }

                h1 {
                    font-size: 3.2rem;
                    font-weight: 600;
                    margin-top: 2.4rem;
                    margin-bottom: 0.4rem;
                }
                h2 {
                    font-size: 2.8rem;
                    font-weight: 600;
                    margin-top: 2.4rem;
                    margin-bottom: 0.4rem;
                }
                h3 {
                    font-size: 2.4rem;
                    font-weight: 600;
                    margin-top: 2.4rem;
                    margin-bottom: 0.4rem;
                }
                h4 {
                    font-size: 2.4rem;
                    font-weight: 600;
                    margin-top: 2.4rem;
                    margin-bottom: 0.4rem;
                }
                h5 {
                    font-size: 2rem;
                    font-weight: 600;
                    margin-top: 2.4rem;
                    margin-bottom: 0.4rem;
                }
                h6 {
                    font-size: 1.7rem;
                    font-weight: 600;
                    margin-top: 2.4rem;
                    margin-bottom: 0.4rem;
                }
                strong {
                    font-weight: 600;
                    font-size: 1.6rem;
                }
                // 문장
                p,
                a,
                em {
                    font-size: 1.6rem;
                    font-weight: 300;
                    margin-bottom: 0.8rem;
                }
                ul,
                ol {
                    margin-bottom: 0.8rem;
                }
                li {
                    font-size: 1.6rem;
                    font-weight: 300;
                    list-style: inside;
                    text-indent: -2rem;
                    list-style-position: inside;
                    padding-left: 2.4rem;
                }
                pre {
                    background-color: #f9f9f9;
                    padding: 2rem;
                    margin-top: 2.4rem;
                }
                code {
                    font-size: 1.5rem;
                    font-family: "Fira Code", monospace;
                    background-color: #f9f9f9;
                    padding: 0.2rem 0.4rem;
                    border-radius: 0.2rem;
                }
                blockquote {
                    border-left: 4px solid #323232;
                    padding: 1.2rem 2rem;
                    background-color: rgba(177, 179, 251, 0.1);
                }
                blockquote p {
                    line-height: 2.6rem;
                }
                p img {
                    width: 100%;
                    display: block;
                    margin-bottom: 1.6rem;
                }
                hr {
                    border: none;
                    border-top: 1px solid #e5e5e5;
                    margin-bottom: 0.8rem;
                }

                .markdown-body a {
                    color: rgba(0, 0, 255, 1);
                    text-decoration: underline;
                }
                .comments .utterances {
                    max-width: 100%;
                    margin: 0;
                }
                .markdown-body {
                    padding-bottom: 4rem;
                    margin-bottom: 1.6rem;
                    border-bottom: 1px solid #f1f1f1;
                }
                article {
                    width: 86rem;
                    margin-bottom: 8rem;
                }
                .date {
                    font-size: 1.4rem;
                }
                .article-header {
                    margin-bottom: 2rem;
                    border-bottom: 1px solid #f1f1f1;
                    padding-bottom: 1.6rem;
                }
                .title {
                    margin-bottom: 1.6rem;
                    font-weight: 500;
                }
                .title:hover{
                    color : #a1a1a1;
                }
                .cat-name {
                    font-family: "DungGeunMo";
                }
            `}</style>
        </main>
    );
}
