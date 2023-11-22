interface INews {
    id: number
    text: string
}

async function getNews(): Promise<INews[]> {
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
        <ul>
            {news.map(({ id, text }) => (
                <li key={id.toString()}>{text}</li>
            ))}
        </ul>
    )
}