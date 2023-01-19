import { useEffect, useRef } from "react";

export default function Comments (){
    const commentsRef = useRef<HTMLElement | null > (null);

    useEffect(()=>{
        const scriptElement = document.createElement('script');
        scriptElement.src = "https://utteranc.es/client.js";
        scriptElement.async = true;
        scriptElement.crossOrigin = 'anonymous';

        scriptElement.setAttribute('repo', 'sungman5/sungman5.github.io');
        scriptElement.setAttribute('label', 'comment');
        scriptElement.setAttribute('issue-term', 'pathname');
        scriptElement.setAttribute('theme', 'github-light');        

        commentsRef.current?.appendChild(scriptElement);
    })
    return <section className="comments" ref={commentsRef}/>
}