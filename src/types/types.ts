export interface load {
    [key: string]: string;
}

export interface SourceObj {
    //status: string;
    ///totalResults?: number;
    articles?: NewsItems[];
    sources?: SourceItems[];
    /*id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;*/
}

export interface NewsItems {
    author: string;
    source: {
        id: string;
        name: string;
    };
    publishedAt: string;
    title: string;
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
