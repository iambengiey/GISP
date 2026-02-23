const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy({ "src/styles": "styles" });
  eleventyConfig.addPassthroughCopy({ "src/scripts": "scripts" });
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });
  eleventyConfig.addPassthroughCopy({ "node_modules/lunr/lunr.min.js": "scripts/lunr.min.js" });

  eleventyConfig.addWatchTarget("./src/styles/");
  eleventyConfig.addWatchTarget("./src/scripts/");

  eleventyConfig.addGlobalData("buildTime", new Date().toISOString());

  eleventyConfig.addFilter("formatDate", (value) => {
    const date = new Date(value);
    return new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(date);
  });

  eleventyConfig.addFilter("isoDate", (value) => new Date(value).toISOString());

  eleventyConfig.addFilter("lastUpdated", (inputPath) => {
    try {
      const cmd = `git log -1 --format=%cI -- "${inputPath}"`;
      const result = execSync(cmd, { encoding: 'utf8' }).trim();
      return result || null;
    } catch {
      return null;
    }
  });

  eleventyConfig.addFilter("byParent", (items, parentName) =>
    items.filter((item) => item.parent === parentName)
  );

  eleventyConfig.addFilter("byTag", (items, tag) =>
    items.filter((item) => Array.isArray(item.tags) && item.tags.includes(tag))
  );

  eleventyConfig.addCollection("news", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/news/*.md").sort((a, b) => b.date - a.date)
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "data",
      output: "dist"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html", "json", "xml"]
  };
};
