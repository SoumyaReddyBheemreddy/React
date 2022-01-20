module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-controls",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "storybook-addon-material-ui5"
  ],
  features: {
    emotionAlias: false,
  },
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}