module.exports = {
  siteUrl: "https://www.anvithshenoy.cloud/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", disallow: "/private" },
    ],
  },
};
