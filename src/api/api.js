import { generateId } from '../helpers/generator';

/**
 * @todo Migrate over to env variable
 */
const url = 'http://localhost:5001';

let token = localStorage.token;

if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

/**
 * @name fetchCategories
 * @description Fetches categories from API
 * @returns {Array} Array of categories
 */
export const fetchCategories = () => {
  return fetch(`${url}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)
}

export const fetchPosts = () => {
  return fetch(`${url}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)
}

export const createPost = (post) => {
  post.id = generateId();
  post.timestamp = Date.now();

  return fetch(`${url}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      author: post.author,
      body: post.body,
      category: post.category,
      deleted: false,
      id: post.id,
      timestamp: post.timestamp,
      title: post.title,
      voteScore: 1
    })
  }).then(res => res.json());
}
