import path from 'path';
import matter from 'gray-matter'
import fs from 'fs'

//마크다운 파일로부터 데이터를 추출하는 함수
export function getStudiesData() {
    const pathOfStudies = path.resolve(process.cwd(), 'posts/studies'); // 포스트 경로 지정
    const studiesPosts = fs.readdirSync(pathOfStudies); // 해당 경로의 파일 리스트를 배열로 추출        

    // 추출된 파일리스트 배열로부터 모든 파일의 id, 내용 추출
    const studiesPostsData: any = studiesPosts.map((filename) => {
        //id 추출
        const id = filename.replace(/\.md$/, "");

        // 모든 파일의 내용 추출
        const eachPostPath = path.join(pathOfStudies, filename);
        const fileContents = fs.readFileSync(eachPostPath, "utf-8");
        const parsingMdFiles = matter(fileContents);

        return {
            id,
            ...parsingMdFiles.data,
        };
    });    
    
    return studiesPostsData;
    
}

export function getMemoData (){
    const pathOfMemo = path.resolve(process.cwd(), 'posts/memo'); // 포스트 경로 지정
    const memoPosts = fs.readdirSync(pathOfMemo); // 해당 경로의 파일 리스트를 배열로 추출

    const bullshittingPostsData: any = memoPosts.map((filename) => {
        //id 추출
        const id = filename.replace(/\.md$/, "");

        // 모든 파일의 내용 추출
        const eachPostPath = path.join(pathOfMemo, filename);
        const fileContents = fs.readFileSync(eachPostPath, "utf-8");
        const parsingMdFiles = matter(fileContents);

        return {
            id,
            ...parsingMdFiles.data,
        };
    });

    return bullshittingPostsData;
}