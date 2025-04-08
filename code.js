const currPosts = [];

const search = document.getElementById('search');
const container = document.getElementById('container');

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' });
  const data = await response.json();
  console.log(data);
  return data;
}

async function showPosts() {

  const posts = await getPosts();
  console.log('yes')
  posts.forEach(({ id, title }) => {
    container.append(createPostElem(id, title))
  })
}

function createPostElem(id, title) {
  const post = document.createElement('div');
  post.classList.add('post');
  post.setAttribute('postId', id);

  const head = document.createElement('div');
  head.classList.add('post__head');

  const header = document.createElement('h1');
  header.classList.add('post__header');
  header.textContent = title;
  
  const buttons = document.createElement('div');
  buttons.classList.add('post__buttons');

  const buttonShow = document.createElement('button');
  buttonShow.classList.add('post__button', 'button_show');
  buttonShow.addEventListener('click', showPost);

  const buttonEdit = document.createElement('button');
  buttonEdit.classList.add('post__button', 'button_edit');

  const buttonDelete = document.createElement('button');
  buttonDelete.classList.add('post__button', 'button_delete');

  buttons.append(buttonShow, buttonEdit, buttonDelete);
  head.append(header, buttons);
  post.append(head);

  return post;
}

function createEditPostFormElem(id, title) {
  const post = document.createElement('div');
  post.classList.add('post');
  post.setAttribute('postId', id);

  const head = document.createElement('div');
  head.classList.add('article__head');

  const header = document.createElement('h1');
  header.classList.add('article__header');
  header.textContent = title;
  
  const button = document.createElement('button');
  button.classList.add('article__button', 'button_show');
  button.addEventListener('click', showArticle);

  head.append(header, button);
  article.append(head);

  return article;
}

async function showPost(event) {
  const button = event.target;
  const article = event.target.closest('.article');
  const id = article.getAttribute('postId');

  button.removeEventListener('click', showArticle);
  
  button.classList.remove('button_show');
  button.classList.add('button_loading');

  const articleText = document.createElement('p');
  articleText.classList.add('article__text');
  articleText.textContent = data.body;

  button.addEventListener('click', hideArticle);
  button.classList.remove('button_loading');
  button.classList.add('button_hide');

  article.append(articleText);
}

function hideArticle(event) {
  const button = event.target;
  const article = event.target.closest('.article');
}

showPosts()