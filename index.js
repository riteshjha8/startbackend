require('dotenv').config()

const express = require('express')
const app = express()

const port = 3000

const gitdata ={
  "login": "riteshjha8",
  "id": 195796136,
  "node_id": "U_kgDOC6ucqA",
  "avatar_url": "https://avatars.githubusercontent.com/u/195796136?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/riteshjha8",
  "html_url": "https://github.com/riteshjha8",
  "followers_url": "https://api.github.com/users/riteshjha8/followers",
  "following_url": "https://api.github.com/users/riteshjha8/following{/other_user}",
  "gists_url": "https://api.github.com/users/riteshjha8/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/riteshjha8/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/riteshjha8/subscriptions",
  "organizations_url": "https://api.github.com/users/riteshjha8/orgs",
  "repos_url": "https://api.github.com/users/riteshjha8/repos",
  "events_url": "https://api.github.com/users/riteshjha8/events{/privacy}",
  "received_events_url": "https://api.github.com/users/riteshjha8/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-01-20T17:09:41Z",
  "updated_at": "2026-01-14T06:57:49Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('url ')
})
app.get('/twitter',(req,res)=>{
    res.json(gitdata)
})


app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
