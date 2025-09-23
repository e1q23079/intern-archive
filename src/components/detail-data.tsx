
type Links = {
    name: string;
    url: string;
}

type DetailData = {
    company: string;
    title: string;
    description: string;
    url: string;
    date: string;
    location: string;
    explanation: string;
    image: [string];
    list: [string];
    ingenuity: [string];
    hard: [string];
    learned: [string];
    github: string;
    links: Links[];
    other: string;
};

export default DetailData;