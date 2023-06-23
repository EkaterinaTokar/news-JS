export interface load {
    [key: string]: string;
}
export interface SourceObj {
    articles?: NewsItems[];
    sources?: SourceItems[];
}
export interface NewsItems {
    author: string | null;
    source: {
        id: string;
        name: string;
    };
    publishedAt: string;
    title: string | null;
    description: string;
    url: string;
    urlToImage: string;
}
export interface SourceItems {
    id: string;
    name: string;
    description?: string;
    url?: string;
    category?: string;
    language?: string;
    country?: string;
    sources?: string[];
    articles?: string[];
}
