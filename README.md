### Next.js + Contentful

Forked my next.js example - [example-nextjs-emotion11-material-ui](https://github.com/Jareechang/example-nextjs-emotion11-material-ui). Integrated a base blog page to use emotion and material-ui.

⚠️ This is a work-in-progress. Mainly to experiment with headless cms on next.js and grapql using @apollo/client. I am using SSG (static site generation) only for now. 

### Getting Started

#### Contentful setup

**ContentModels:**

1. Blog
 - title
 - description
 - date
 - body
 - slug
 - author (references Person)

2. Person 
 - name 
 - age

#### Starting server 
Create `.env.local`

```
CONTENTFUL_SPACE=<space>
CONTENTFUL_ACCESS_TOKEN=<token>
```

1. Start server `yarn run dev`  
2. Visit `http://localhost:3000`


### Reference

- [Basic Final Next.js](https://github.com/vercel/next-learn-starter/tree/master/basics-final)
- [Jareechang/example-nextjs-emotion11-material-ui](https://github.com/Jareechang/example-nextjs-emotion11-material-ui)


### Technologies

- [emotion](https://emotion.sh/docs/@emotion/css) @ 11.0
- [material-ui](https://material-ui.com/) @ 4.11
- [next](https://nextjs.org/docs/getting-started) @ 10.x
- [polished](https://polished.js.org/docs/) @ 4.x
- [contentful](https://www.contentful.com/)
- [@apollo/client](https://www.apollographql.com/docs/react/)
