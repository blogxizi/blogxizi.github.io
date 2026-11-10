import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: '首页', href: getPermalink('/') },
    { text: '文章', href: getBlogPermalink() },
    { text: '搜索', href: getPermalink('/search') },
    { text: '关于', href: getPermalink('/about') },
    { text: '标签', href: getPermalink('/tags') },
    {
      text: '语言',
      links: [
        { text: 'English', href: '/' },
        { text: '简体中文', href: '/zh' },
        { text: '日本語', href: '/ja' },
      ],
    },
  ],
  actions: [
    {
      text: 'GitHub',
      href: 'https://github.com/blogxizi',
      target: '_blank',
    },
    {
      text: '赞助',
      href: '/donate',
      class: 'border border-primary text-primary hover:bg-primary hover:text-white',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: '浏览',
      links: [
        { text: '首页', href: getPermalink('/') },
        { text: '全部文章', href: getBlogPermalink() },
        { text: '搜索', href: getPermalink('/search') },
        { text: '关于', href: getPermalink('/about') },
        { text: '全部标签', href: getPermalink('/tags') },
      ],
    },
    {
      title: '文字与生活',
      links: [
        { text: '随笔', href: getBlogPermalink() },
        { text: '诗歌', href: getBlogPermalink() },
        { text: '议论文', href: getBlogPermalink() },
        { text: '日常分享', href: getBlogPermalink() },
      ],
    },
    {
      title: '其他',
      links: [
        { text: 'GitHub', href: 'https://github.com/blogxizi' },
        { text: '赞助', href: '/donate' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    {
      ariaLabel: 'GitHub',
      icon: 'tabler:brand-github',
      href: 'https://github.com/blogxizi',
    },
  ],
  footNote: 'Blogxizi | 记录思考，收藏生活。',
};
