export interface load {
    [key: string]: string;
}
/*export interface options {
    options?: string;
}*/
export interface sourceObj {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
export interface Source {
    url: string;
    id: string;
    name: string;
}
