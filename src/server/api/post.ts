/* eslint-disable @typescript-eslint/no-unsafe-return */
import { API_URL } from ".";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getAllPosts(): Promise<IPost[]> {
  const response = await fetch(`${API_URL}/posts`);

  return await response.json();
}

export async function getOnePost(id: number): Promise<IPost> {
  const response = await fetch(`${API_URL}/posts/${id}`);
  return response.json();
}
