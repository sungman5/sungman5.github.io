import Image from "next/image";
import Link from "next/link";
import { readyAlert } from "../lib/ready_alert";

export default function About() {
    return (
        <>
            <section>
                <Image
                    src="/img/designdevunicorn.jpg"
                    width={330}
                    height={420}
                    alt="제가 그 유니콘입니다."
                />
                <p>
                    Maybe I&apos;m the man you&apos;re looking for.
                    <br />
                    오늘도 즐거운 하루 되세요.
                </p>
                <Link
                    style={{
                        fontSize: "1.6rem",
                        fontFamily: `"Fira Code",
                        monospace`,
                        textDecoration:'underline'
                    }}
                    href="https://walterdesign.co.kr"
                    target={"_blank"}
                >
                    works history 👉
                </Link>
            </section>
            <style jsx>
                {`
                    p {
                        font-size: 1.6rem;
                        margin-bottom: 2.4rem;
                    }                    
                `}
            </style>
        </>
    );
}
