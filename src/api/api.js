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

export const fetchComments = (postId) => {
  return fetch(`${url}/posts/${postId}/comments`, {headers})
    .then(res => res.json())
    .then(data => data);
}

export const fetchPosts = () => {
  return fetch(`${url}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)
}

export const createComment = (comment, postId) => {
  comment.id = generateId();
  comment.parentId = postId;
  comment.timestamp = Date.now();

  return fetch(`${url}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      author: comment.author,
      body: comment.body,
      deleted: false,
      id: comment.id,
      parentDeleted: false,
      parentId: comment.parentId,
      timestamp: comment.timestamp,
      voteScore: 1
    })
  }).then(res => res.json());
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

export const deleteComment = (comment) => {
  return fetch(`${url}/comments/${comment.id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      delete: true
    })
  }).then(res => res.json());
}

export const deletePost = (post) => {
  return fetch(`${url}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      deleted: true
    })
  }).then(res => res.json());
}

export const editComment = (comment) => {
  return fetch(`${url}/comments/${comment.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }).then(res => res.json());
}

export const editPost = (post) => {
  return fetch(`${url}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      author: post.author,
      body: post.body,
      category: post.category,
      deleted: post.deleted,
      id: post.id,
      timestamp: post.timestamp,
      title: post.title,
      voteScore: post.voteScore
    })
  }).then(res => res.json());
};
