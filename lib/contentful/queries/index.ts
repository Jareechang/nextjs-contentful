import { gql } from '@apollo/client';

export const GET_AVAILABLE_POSTS = gql`
query GetPosts {
  postCollection {
    items {
      slug
    }
  }
}
`

export const GET_POSTS = gql`
query GetPosts {
  postCollection(limit: 10, order: date_DESC) {
    items {
      sys {
        id
      }
      title
      slug
      date
      author {
        __typename
        ... on Person {
          sys {
            id
          }
          name
        }
      }
    }
  }
}
`;

export const GET_POST_COTENT_BY_SLUG = gql`
query GetPostsBySlug($slug: String!) {
  postCollection(limit: 1, where: {
    slug_in: [$slug]
  }) {
    items {
      sys {
        id
      }
      title
      slug
      date
      body {
        json
      }
      author {
        __typename
        ... on Person {
          sys {
            id
          }
          name
        }
      }
    }
  }
}
`
