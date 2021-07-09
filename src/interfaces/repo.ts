export interface Repository {
    name: string;
    url: string;
    description: string;
}

export interface RepositoryList {
  name: string;
  repos: Repository[]
}
