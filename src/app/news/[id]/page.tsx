import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const res = await fetch('http://localhost:4000/news');

    const news = await res.json();
    return news.map(({ id }: { id: number }) => ({
        id: `${id}`,
    }))
}

async function getNewsItem(id: string) {
    const res = await fetch(`http://localhost:4000/news/${id}`, {
        next: {
            revalidate: 60,
        },
    });

    if (!res.ok) notFound();

    return res.json();
}

export default async function NewsPiece({ params: { id } }: { params: { id: string } }) {
    const newsItem = await getNewsItem(id);

    return (
        <div>{newsItem.text}</div>
    )
}
