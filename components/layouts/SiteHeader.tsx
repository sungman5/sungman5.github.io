import Image from "next/image";
import Link from "next/link";
import Nav from "../nav";

const SiteHeader = () => {
    return (
        <header>
            <Link
                className="logo"
                style={{
                    fontSize: "3.2rem",
                    fontFamily: "DungGeunMo",
                    color: "#000000",
                }}
                href={"/"}
            >
                <Image
                    src={"/img/unicorn_1f984.png"}
                    width={64}
                    height={64}
                    alt="UNICORN-IS-HERE"
                />
            </Link>
            <Nav />
            <style jsx>{`
                header {
                    margin-bottom: 4rem;
                }
            `}</style>
        </header>
    );
};

export default SiteHeader;
