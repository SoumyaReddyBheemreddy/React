import { muiTheme } from 'storybook-addon-material-ui5';
import {bookCardTheme} from '../src/components/molecules/card/CardStyle';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: false,
    iframeHeight: "700px",
  },
}
export const decorators = [
	muiTheme([bookCardTheme])
];