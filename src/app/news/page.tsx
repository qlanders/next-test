import NewsList from "@/app/news/NewsList";
import {Suspense} from "react";
import Loading from "@/app/loading";

export default function News() {
    return (
        <main>
            <h1>news</h1>
            <Suspense fallback={<Loading />}>
                <NewsList />
            </Suspense>
        </main>
    )
}
