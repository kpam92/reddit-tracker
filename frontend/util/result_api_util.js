

export const fetchComments= (username) => {
  return $.ajax({
    method: 'GET' ,
    url: `https://www.reddit.com/user/${username}/comments.json`
  })
}

export const fetchPosts= (username) => {
  return $.ajax({
    method: 'GET' ,
    url: `https://www.reddit.com/user/${username}/submitted.json`
  })
}
