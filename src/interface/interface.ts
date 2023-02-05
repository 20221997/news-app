export interface Route {
    to: string,
    path: string,
    Component: () => JSX.Element, 
    name: string
}

export interface Main {
    loading:      Boolean;
    // status:       string;
    articles:     Article[];
}

export interface Article {
    source:      Source;
    author:      null | string;
    title:       string;
    description: string;
    url:         string;
    urlToImage:  string;
    publishedAt: string;
    content:     string;
    // category:    Category;
}

export interface Source {
    id:   null | string;
    name: string;
}


export enum Category {
    Business = "business",
    Entertainment = "entertainment",
    General = "general",
    Health = "health",
    Science = "science",
    Sports = "sports",
    Technology = "technology",
}