import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
    let now = new Date();
    let year = now.getFullYear();

    return (
        <>
            <footer>
                <p style={{fontSize:'1.4rem' }}>&copy;UNICORN-IS-HERE {year}</p>
                <Link
                    href={"https://github.com/sungman5"}
                    title="별거없지만 깃허브 방문하기"
                    target={"_blank"}
                >
                    <Image
                        src="/img/iconmonstr-github-1.svg"
                        alt={"https://github.com/sungman5"}
                        width={24}
                        height={24}
                    />
                </Link>
                <Link
                    href={"mailto:sungman5@gmail.com"}
                    title="문의 메일 보내기"
                    target={"_blank"}
                >
                    <Image
                        src="/img/iconmonstr-email-4.svg"
                        alt={"sungman5@gmail.com"}
                        width={24}
                        height={24}
                    />
                </Link>
            </footer>
            <style jsx>
                {`
                    footer {
                        display: flex;
                        gap: 1.8rem;                        
                        padding-top: 2.4rem;
                    }            
                `}
            </style>
        </>
    );
}
