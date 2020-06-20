module.exports = {
  siteMetadata: {
    title: `Amr Elsekilly`,
    name: `Amr Elsekilly`,
    siteUrl: `https://amrsekilly.com`,
    description: `Senior Frontend Engineer at Pelcro. 
    I also make OSS contributions, write blog posts, 
    and create videos on YouTube about frontend web development and remote work.`,
    hero: {
      heading: `I blog about frontend web development and remote work.`,
      maxWidth: 1000,
    },
    social: [
      {
        name: `linkedin`,
        url: `https://linkedin.com/in/amrsekilly`,
      },
      {
        name: `youtube`,
        url: `https://youtube.com/amrsekilly`,
      },
      {
        name: `github`,
        url: `https://github.com/amrsekilly`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/amrsekilly`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/amrsekilly`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Amr Elsekilly`,
        short_name: `amrsekilly`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://amrsekilly.us10.list-manage.com/subscribe/post?u=9c5d18a0443adca15fe58cbcf&amp;id=520907d0ed", // add your MC list endpoint here; see plugin repo for instructions
      },
    },
  ],
};
