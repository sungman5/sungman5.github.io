---
title: 'NextJS 정적 블로그 액티브 메뉴 만들기'
date: '2023-01-16'
excerpt : 'useRouter 모듈 + 삼항연산자 + 논리연산자'
category : 'studies'
---
사실은 Next.js의 useRouter 모듈과 자바스크립트 논리연산자, 삼항연산자를 이용한 간단한 방법이다. 전체 코드는 아래와 같다.

```
import { useRouter } from 'next/router';

...(중략)...

const router = useRouter();

<li style={{ color:
            router.pathname === "/other" ||
            router.asPath === `/other/${router.query.id}`
                ? 'blue'
                : '#323232'
            }} className="nav-item">
    other
</li>
```


Next.js의 `useRouter()` 모듈을 콘솔에 찍어보면 현재 라우팅에 관한 다양한 정보가 오브젝트 형태로 출력되는데, 그 중에 `pathname`과 `asPath`를 이용하면 액티브 메뉴를 만들어낼 수 있다.

1. `<li>`태그에 `style` 속성을 준뒤 삼항 연산자를 사용한다.
2. `router.pathname이 /other`이거나(||) `router.asPath가 /other/${router.query.id}`라면 color를 blue로 하고, 아니면 color를 #323232로 한다.
```
style={{
    color: router.pathname === "/other" ||
    router.asPath === `/other/${router.query.id}`
    }}
```
사실 이런 간단한 코드를 굳이 포스팅하는 이유는 내가 잠깐 헤맸기 때문인데... 이유인 즉슨 논리 연산자를 정확하게 입력하지 않아서 그랬다.

