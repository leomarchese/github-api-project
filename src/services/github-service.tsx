import { Repo, Repos, User } from '@/common/types';
import { AxiosError } from 'axios';
import api from './api';

const getError = (error: number | undefined) => {
  const errors: any = {
    404: { status: true, message: 'Ops! Dados não encontrados.' },
    default: { status: true, message: 'Ops! Algo deu errado.' }
  };

  return errors[error as number] || errors['default'];
};

export const get = (category: string, searchValue: string) => new Promise<User | Repo>((resolve, reject) => {
  api.get(`/${category}/${searchValue}`)
    .then((response) => {
      return resolve(response.data);
    })
    .catch((err: AxiosError) => reject(getError(err.response?.status)));
});

export const getUserRepos = (searchValue: string) => new Promise<Repos>((resolve, reject) => {
  api.get(`/users/${searchValue}/repos`)
    .then((response) => resolve(response.data))
    .catch((err: AxiosError) => reject(getError(err.response?.status)));
});
