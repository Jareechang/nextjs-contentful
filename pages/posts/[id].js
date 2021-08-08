import Layout from '../../components/layout'
import Head from 'next/head'
import Date from '../../components/date'
import { RichTextPageContent } from '../../components/contentful';
import * as utilStyles from '../../styles/utils.css'
import * as apollo from '../../lib/contentful';
import Typography from '@material-ui/core/Typography';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Typography variant="h1" className={utilStyles.headingXl}>
          {postData.title}
        </Typography>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <RichTextPageContent richTextBodyField={postData.body} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const query = await apollo.client.query({
    query: apollo.queries.GET_AVAILABLE_POSTS
  });
  const items = query?.data?.postCollection?.items ?? [];
  const paths = Array.isArray(items) ? items.map(
    data => data?.slug ? `/posts/${data?.slug}` : ''
  ) : [];
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const query = await apollo.client.query({
    query: apollo.queries.GET_POST_COTENT_BY_SLUG,
    variables: { slug: params.id }
  }) || [];
  return {
    props: {
      postData: query?.data?.postCollection.items[0]
    }
  }
}
