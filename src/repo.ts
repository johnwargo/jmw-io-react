export enum Category { Book, IoT, Misc, Mobile, Node, Web, Windows };

export interface Repository {
    name: string;
    url: string;
    description: string;
    category: Category
}
