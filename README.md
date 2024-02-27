# Next.js 기초 연습

## 기본 정리

- app/page.tsx
  : 루트 페이지
  : http://localhost:3000/

  ```tsx
  export default function Home() {
    return (
      <>
        <h1>첫페이지</h1>
        <ul>
          <li>대구</li>
          <li>부산</li>
          <li>대전</li>
          <li>광주</li>
          <li>서울</li>
        </ul>
      </>
    );
  }
  ```

- app/detail 폴더 / page.tsx 파일생성
  : http://localhost:3000/detail

  ```tsx
  import React from "react";
  const page = () => {
    return <div>page</div>;
  };

  export default page;
  ```

  - app/detail/[city] 폴더생성 page.tsx 파일생성
    : http://localhost:3000/detail/daegu
    : http://localhost:3000/detail/busan
    : http://localhost:3000/detail/daegun
    : http://localhost:3000/detail/gwangju
    : http://localhost:3000/detail/seoul
    : http://localhost:3000/detail/jeju

    ```tsx
    import React from "react";
    // 아.. 어렵다.
    type Props = {
      params: {
        city: string;
      };
    };

    const page = ({ params }: Props) => {
      return <div>상세내용 : {params.city}</div>;
    };

    export default page;
    ```

    ```ts
    import React from "react";
    // 아.. 어렵다.
    type Props = {
      params: {
        city: string;
      };
    };

    const page = ({ params }: Props) => {
      const cityName = params.city === "daegu" ? "대구" : "";
      return <div>상세내용 : {cityName}</div>;
    };

    export default page;
    ```

- 동적 라우팅 적용

  ```tsx
  import Link from "next/link";

  export default function Home() {
    return (
      <>
        <h1>첫페이지</h1>
        <ul>
          <li>
            <Link href="/detail/daegu">대구</Link>
          </li>
          <li>
            <Link href="/detail/busan">부산</Link>
          </li>
          <li>
            <Link href="/detail/daegun">대전</Link>
          </li>
          <li>
            <Link href="/detail/gwangju">광주</Link>
          </li>
          <li>
            <Link href="/detail/seoul">서울</Link>
          </li>
          <li>
            <Link href="/detail/jeju">서울</Link>
          </li>
        </ul>
      </>
    );
  }
  ```

- 정적 라우팅 적용

```tsx
import Link from "next/link";
import React from "react";
// 아.. 어렵다.
type Props = {
  params: {
    city: string;
  };
};

const page = ({ params }: Props) => {
  const cityName = params.city === "daegu" ? "대구" : params.city;
  return (
    <>
      <div>상세내용 : {cityName}</div>
      <Link href="/">이전페이지</Link>
    </>
  );
};

export default page;
```
