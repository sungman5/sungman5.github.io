import Image from "next/image";
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
                    <br/>개발 및 디자인 문의는 이메일로
                </p>
                <a href="#" onClick={readyAlert}>
                    go to works history→
                </a>
            </section>
            <style jsx>
                {`
                    p {
                        font-size: 1.6rem;
                        margin-bottom : 2.4rem;
                    }
                    a {
                        font-size: 1.6rem;
                        font-family: "Fira Code", monospace;
                        text-decoration : underline;                                                
                    }
                `}
            </style>
        </>
    );
}
