import * as path from 'path';
import { defineConfig } from 'rspress/config';

//plugins
import readingTime from 'rspress-plugin-reading-time';
import { pluginFontOpenSans } from 'rspress-plugin-font-open-sans';

export default defineConfig({
  base: '/frontend-treasures/',
  root: path.join(__dirname, 'docs'),
  title: 'Front End Treasures',
  description: 'Front End Treasures',
  icon: '/rspress-icon.png',
  plugins: [
    readingTime({defaultLocale: 'zh-CN'}),
    pluginFontOpenSans()
  ],
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/mindpool/frontend-treasures/' },
    ],
    lastUpdated: true,
  },
});
