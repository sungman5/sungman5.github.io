---
title: 'Next.js + github pages 정적 블로그를 만들며 배운 것들'
date: '2023-01-19'
excerpt : 'nextjs를 이용한 정적 블로그 생성할 때 알아두면 좋은 것들'
author : 'Walter'
category : 'studies'
---
Nextjs + github pages를 이용한 정적 블로그를 만들었다. 만들게 된 몇가지 이유가 있는데,

- 점점 떨어지는 코딩 감각... NextJS/React/TypeScript 잘하진 못해도 감은 유지하자
- ghost에 친화적이지 않은 국내 호스팅 환경이 불편해
- 디지털 오션에 쓰는 월 4천원이 아까워
- 블로그 포스팅으로라도 깃허브 잔디 심어보고 싶어
- 개발자라면 github 블로그 하나쯤은?

뭐 이런 생각으로 별도의 템플릿을 사용하지 않고 무작정 개발을 시작했는데 생각보다 어렵고 헛갈렸다... 스스로 회고 시간을 가지면서 내가 부족했던 부분이 무엇이었는지 정리했다.

### 블로그를 만들며 스스로 했던 질문들

- 정적 블로그는 무엇일까?
- Next.js라는 리액트 프레임워크에서 정적 블로그는 어떤 방식과 흐름으로 포스팅을 발행하게 되는 걸까?
- 그 과정을 구현하는데 어떤 메소드를 사용해야 하는가?
- 그 메소드는 어떻게 사용하는가?

##### 정적 블로그는 무엇일까?
첫번째 질문에 대답하기 위해 생각해봐야 했던 것은 SSG(Static-Site-Generation)에 대한 개념이었다. 웹이 고도화되면서 사용자가 서버와 직접 통신하여 데이터를 주고 받고, 그 데이터에 따라 다양하게 구성되는 화면을 워낙 자연스럽게 접하다보니 '정적 사이트' 혹은 '정적 웹페이지'라는 개념이 내 머릿속에서 잠시 흐릿해졌던 것은 아닌가? 

<img src="https://d33wubrfki0l68.cloudfront.net/b0cd7be20ba718c92b5da007a109a89122f6791a/73909/v3/img/blog/ssg-host-flow.png" alt="정적사이트 흐름도" title="정적사이트 흐름도">

개념을 다시 한 번 떠올려보자. 사용자에게 보여주는 페이지는 이미 만들어져 저장되어 있고, 사용자의 요청이 있을 때 요청에 해당하는 웹페이지를 보여줄 뿐, 운영자나 개발자가 데이터를 변경하지 않는다면 사용자는 매번 똑같은 화면을 보게된다. 흔히 <a href="http://wiki.hash.kr/index.php/%EC%9B%B9_1.0" target="_blank">WEB1.0</a>이라고 부르는 시대의 웹페이지들이 바로 정적 사이트라고 보면 된다. __WEB1.0에서 운영자나 개발자는 정보를 수집/생성하고 디렉토리 기준으로 정리하여 사용자가 요청시마다 정해진 페이지를 일방적으로 보여준다.__

##### 정적 블로그는 어떻게 동작할까?
Next.js의 `Pre-rendering`을 통해 정적 페이지를 생성한다는 개념을 이해해야 정적 블로그가 어떻게 작동하는지 이해할 수 있다. 마크다운으로 작성한 파일을 빌드시에 html 파일로 생성하여 배포한다. 블로그 작동 과정를 간단하게 정리하면 아래와 같다.

1. 사용자는 VS code와 같은 편집기를 이용하여 마크다운 파일(*.md, *.mdx) 형식으로 포스트를 작성한다.
2. 배포를 위한 빌드시 해당 마크다운 파일(a.k.a 포스트)들을 `Pre-rendering`하여 html 페이지로 만들어낸다.
3. 생성된 html 페이지를 Next.js의 `Dynamic Route`를 활용하여 라우팅한다.
4. 요청시 사용자에게 생성된 html 페이지를  보여준다.

##### Pre-rendering?
Next.js의 특징 중 하나인 Pre-rendering에 관한 상세한 내용은 당연히 <a href="https://nextjs.org/learn/basics/data-fetching">공식문서</a>를 읽는 게 가장 좋다. 간단하게 말하자면 리액트처럼 자바스크립트로 클라이언트 쪽의 모든 작업을 수행하는 대신, 미리 생성할 수 있는 페이지나 데이터들을 미리 만들어 놨다가 사용자에게 빨리 보여 주자는 이야기. 보통 빌드될 때나, 요청이 있을 때 서버에서 만들어서 보여준다.

> 기본적으로, Next.js의 `Pre-rendering`는 모든 페이지에서 일어난다. 이는 클라이언트 사이드에서 자바스크립트가 모든 작업을 하는 것을 대신해서, Next.js가 모든 페이지에서 HTML을 생성한다는 것을 의미한다. `Pre-rendering`은 더 나은 검색최적화(SEO) 퍼포먼스를 보여줄 수 있습니다. 즉, 페이지에서 자바스크립트가 필요 없는 부분은 미리 HTML을 생성하고, 자바스크립트는 꼭 필요한 최소한의 부분만 실행하여 인터렉티브한 페이지를 만드는 것이다. (이 과정을 **hydration**이라 부른다.)

##### 실제 코드를 뜯어보며 작동 방식을 이해해 보자.
* 나의 마크다운 파일들은 `/posts/studies`에 모여있다.
* `/posts/studies` 폴더의 데이터는 `/pages/studies/[id]` 페이지에 출력된다.
```
export async function getStaticPaths() {
    const fs = require("fs");
    // 1️⃣ node.js의 fs(file system)모듈을 import한다.

    const files = fs.readdirSync('posts/studies');
    // 2️⃣ fs모듈의 readdirSync메소드를 이용하여 폴더안의 파일을 배열로 추출한다.

    const paths = files.map((element) => {        
        return {
            params: {
                id: element.replace(/\.md$/, ""),
            },
        };
    });
    // 3️⃣ map 함수를 사용하여 다이나믹 라우트의 [id]에 들어갈 값을 만든다.
    // 4️⃣ 파일 이름을 [id]로 사용하기 위해 파일이름에서 확장자 부분을 떼주는 과정을 포함했다.

    return {
        paths,
        fallback: false,
    }; 
    // 5️⃣ 리턴 값으로 paths 오브젝트와 fallback:false를 반환한다.
}
```
`getStaticPath`를 이용하여 `[id]`에 사용될 `params`를 만들었다. 반환된 `paths`는 `getStaticProps`에 전달된다.

```
export async function getStaticProps({ params }) {

    const id = params.id;
    // 1️⃣ getStaticPath로 부터 전달받은 params 오브젝트를 변수 id로 선언한다. 이 값은 리턴값에 포함된다.    

    const filePath = path.join('posts/studies', `${id}.md`);
    // 2️⃣ path.join를 활용하여 [id] 이름을 가진 파일을 변수로 선언한다.

    const fileContents = readFileSync(filePath, "utf-8");
    // 3️⃣ fs 모듈 중 readFileSync 메소드를 활용하여  
    // 'posts/studies/${id}.md' 파일의 내용을 fileContents 변수로 선언한다.

    const markdown = matter(fileContents);
    // 4️⃣ gray-matter의 matter 메소드를 활용하여 markdown 파일의 내용을
    // front-matter 부분과 content 부분으로 분리 가능하도록 파싱한다.

    const processedContent = await unified()
        .use(remarkGfm)
        .use(remarkParse)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeSlug)
        .use(rehypeStringify)
        .process(markdown.content);

    const contentHtml = processedContent.toString();

    // 5️⃣ 포스팅의 분문 부분에 해당하는 markdown의 content 부분을
    // unified 메소드를 이용해 파싱하고, 문자열로 변경한다.

    return {
        props: {
            postData: {
                id,
                contentHtml,
                ...markdown.data,
            },
        },
    };
    // 6️⃣ getStaticPath에서 전달받은 경로(id), 포스팅 본문(contentHtml),
    // 포스팅 정보(...markdown.data)를 하나의 오브젝트로 생성하여 props로 컴포넌트에 전달한다.
}
```
#### 참조
<a href="https://code-anthropoid.tistory.com/category/React/Next.js"  style="display:block;" target="_blank">Next.js로 블로그 만들기</a>
<a href="https://velog.io/@taeung/Next.js-getStaticProps-%EC%82%AC%EC%9A%A9%EA%B8%B0" target="_blank" style="display:block;">Next.js getStaticProps 사용기</a>
<a href="https://velog.io/@chaewonkang/Next.js%EC%9D%98-%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%8E%98%EC%B9%AD%EA%B3%BC-%EB%A0%8C%EB%8D%94%EB%A7%81" target="_blank" style="display:block;">Next.js의 데이터 페칭과 렌더링</a>