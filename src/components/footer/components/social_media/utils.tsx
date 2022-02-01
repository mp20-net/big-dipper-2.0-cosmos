import React from 'react';
import {
  TwitterIcon,
  GithubIcon,
} from '@icons';

export const socialMediaLinks:{
  component: React.ReactNode;
  className: string;
  url: string;
}[] = [
  {
    component: <TwitterIcon />,
    className: 'twitter',
    url: 'https://twitter.com/08mp20',
  },
  {
    component: <GithubIcon />,
    className: 'github',
    url: 'https://github.com/mp20-net',
  },
];
