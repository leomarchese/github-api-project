export interface User {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface Repo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  forks: number;
}

export interface Repos {
  [index: number]: Repo;
}

export type Error = {
  status: boolean;
  message: string;
}

export type Action = {
  type: string,
  payload?: User | Repo | Repos | Error
}
