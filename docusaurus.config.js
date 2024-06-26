// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "SparkPlusPlus",
    tagline: "Apache Spark resources",
    url: "https://sparkplusplus.github.io/",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.png",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: "/",
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: 'https://github.com/sparkplusplus/sparkplusplus.github.io/edit/main/',
                },
                blog: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],
    stylesheets: [
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            zoom: {
                selector: '.markdown :not(em) > img',
            },
            navbar: {
                title: "",
                logo: {
                    alt: "SparkPlusPlus Logo",
                    src: "img/Logo.png",
                    srcDark: "img/Logo.png",
                },
                items: [
                    {to: "https://github.com/sparkplusplus", position: "left", label: "Home"},
                    {type: "doc", docId: "index", position: "left", label: "Spark Internals"},
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Join our Slack",
                                href: "https://join.slack.com/t/sparkplusplus/shared_invite/zt-2ceryo2v8-rb6m5M0Bqq02n_KKjP6CvQ",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Github",
                                href: "https://github.com/sparkplusplus/",
                            },
                        ],
                    },
                ],
                // copyright: `©SparkPlusPlus`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ["java", "scala", "groovy"],
            },
            algolia: {
                appId: "P8WC4Z2QXP",
                apiKey: "9d382f5c18d03fa2c2052b38cc325e16", // okay to publish this as this is PUBLIC SEARCH KEY
                indexName: "sparkplusplusio",
                contextualSearch: false,
                // externalUrlRegex: 'external\\.com|domain\\.com',
                searchParameters: {}, // keep this empty to solve issue with facet filters
                // searchPagePath: "search",
            },
        }),

    plugins: [
        'docusaurus-plugin-image-zoom',
        [
            "@docusaurus/plugin-client-redirects",
            {
                redirects: [
                    {
                        to: "/",
                        from: "/developer/videos/",
                    },
                ],
            },
        ],
    ],
};

module.exports = config;
