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
        mailchimp: true,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Amr Elsekilly",
        short_name: "AmrSekilly",
        start_url: "/",
        background_color: "#000",
        theme_color: "#000",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/assets/favicon.png",
        icons: [
          {
            src: "src/images/favicon.png",
            purpose: "maskable",
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: "src/images/favicon.png",
            purpose: "maskable",
            sizes: `196x196`,
            type: `image/png`,
          },
          {
            src: "src/images/favicon.png",
            sizes: `512x512`,
            type: `image/png`,
            purpose: "maskable",
          },
        ], // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
