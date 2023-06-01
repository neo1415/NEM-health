import React from 'react';
import { GetServerSideProps } from 'next';
import { Type as PageType } from '../collections/Page';
import NotFound from '../components/NotFound';
import Head from '../components/Head';
import RenderBlocks from '../components/RenderBlocks';
import Template from '../components/layout/Template';
import PageHero from '../components/layout/PageHero';
import useStyles from '../css/pages/[...slug]';
import { Type as FooterType } from '../globals/Footer';
import { Type as SocialMediaType } from '../globals/SocialMedia';
import payload from 'payload';

export type Props = {
  page?: PageType;
  statusCode: number;
  footer: FooterType;
  socialMedia: SocialMediaType;
};

const Page: React.FC<Props> = (props) => {
  const { page, footer, socialMedia } = props;
  const classes = useStyles();

  if (!page) {
    return <NotFound />;
  }

  return (
    <Template
      className={classes.page}
      footer={footer}
      socialMedia={socialMedia}
    >
      <Head
        title={page.meta?.title || page.title}
        description={page.meta?.description}
        keywords={page.meta?.keywords}
      />
      <PageHero
        title={page.title}
        type={page.heroType}
        content={page.heroContent}
        image={page.heroImage}
      />
      <RenderBlocks layout={page.layout} />
    </Template>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug ? (ctx.params.slug as string[]).join('/') : 'home';

  const pageQuery = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!pageQuery.docs[0]) {
    ctx.res.statusCode = 404;

    return {
      props: {},
    };
  }

  return {
    props: {
      page: pageQuery.docs[0],
    },
  };
};