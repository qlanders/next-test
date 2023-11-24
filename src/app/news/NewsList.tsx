import Link from "next/link";

interface INews {
    id: number
    text: string
}

async function getNews(): Promise<INews[]> {
    await new Promise(resolve => setTimeout(resolve, 3000));

    const res = await fetch('http://localhost:4000/news', {
        next: {
            revalidate: 30,
        }
    });

    return res.json()
}

export default async function NewsList() {
    const news = await getNews();

    return (
        <>

        <ul>
            {news.map(({ id, text }) => (
                <li key={id.toString()}>
                    <Link href={`/news/${id}`}>{text}</Link>
                </li>
            ))}
        </ul>
        </>
    )
}