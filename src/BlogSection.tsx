import {
  Box,
  Column,
  Container,
  Heading,
  Paragraph,
  Row,
  Text,
  Button,
} from 'paramount-ui';
import React from 'react';
import { ImageBackground } from 'react-native';

import { Link } from './Link';

interface BlogPost {
  link: string;
  coverImageUrl: string;
  title: string;
  editor: string;
  editorLogo: string;
  description: string;
  publishedTime: string;
}

interface FeedItem {
  // eslint-disable-next-line
  'content:encoded': string;
  link: string;
  title: string;
  creator: string;
  isoDate: string;
}

interface Feed {
  items: FeedItem[];
}

const parseBlogPosts = (feed: Feed): BlogPost[] => {
  const blogPosts: BlogPost[] = [];
  if (!feed || !feed.items) return blogPosts;

  const imageSrcRegex = /<img.*?src="(.*?)"/i;
  let coverImageTag;
  let tmpDiv;
  for (const item of feed.items) {
    coverImageTag = imageSrcRegex.exec(item['content:encoded']);
    tmpDiv = document.createElement('div');
    tmpDiv.innerHTML = item['content:encoded'];

    blogPosts.push({
      link: item.link || '',
      coverImageUrl: coverImageTag ? coverImageTag[1] : '',
      title: item.title || '',
      editor: item.creator || '',
      editorLogo:
        'https://cdn-images-1.medium.com/fit/c/60/60/1*N8XHvK7UuTuoj31VIbMGsw.png',
      description: tmpDiv.textContent || tmpDiv.innerText || '',
      publishedTime: item.isoDate || '',
    });
  }

  return blogPosts;
};

const timeSince = (date: number): string => {
  const seconds = Math.floor((new Date().getTime() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + ' years';
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + ' months';
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + ' days';
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + ' hours';
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + ' minutes';
  }
  return Math.floor(seconds) + ' seconds';
};

interface BlogPostProps {
  blog: BlogPost;
}

const BlogPost = ({ blog }: BlogPostProps): JSX.Element => {
  const {
    link,
    coverImageUrl,
    title,
    editor,
    editorLogo,
    description,
    publishedTime,
  } = blog;

  return (
    <ImageBackground source={{ uri: coverImageUrl }}>
      <Link to={link} isExternal>
        <Box
          backgroundColor="#000"
          opacity={0.5}
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
        />
        <Box marginTop={96} marginLeft={32} marginRight="10%">
          <Box height={80} overflow="hidden">
            <Heading size="xlarge" color="white">
              {title}
            </Heading>
          </Box>
          <Box marginTop={8} marginRight="10%" height={90} overflow="hidden">
            <Paragraph color="#ffffff">
              {description ? description.substr(0, 256) : ''}
            </Paragraph>
          </Box>
          <Box flexDirection="row" marginVertical={32}>
            <Box borderRadius={0.5}>
              <img src={editorLogo} alt="editor logo" width={36} height={36} />
            </Box>
            <Box marginLeft={16}>
              <Box>
                <Text size={15} weight="bold" color="#ffffff">
                  {editor}
                </Text>
              </Box>
              <Box>
                <Text size={11} color="#ffffff">
                  {timeSince(Date.parse(publishedTime))} ago
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    </ImageBackground>
  );
};

export const BlogSection = (): JSX.Element => {
  const [blogPosts, setBlogPosts] = React.useState<BlogPost[]>([]);

  React.useEffect(() => {
    fetch(
      'https://wetrust-proxy-server.herokuapp.com/wetrust_medium_blog_feeds',
    )
      .then(response => response.json())
      .then(json => setBlogPosts(parseBlogPosts(json)));
  }, []);

  if (!blogPosts.length) return <Text>Loading...</Text>;

  return (
    <Box>
      <Container>
        <Row>
          <Column large={8} xlarge={8}>
            <Box marginBottom={24}>
              <BlogPost blog={blogPosts[0]} />
            </Box>
          </Column>
          <Column large={4} xlarge={4}>
            <Box marginBottom={24}>
              <BlogPost blog={blogPosts[1]} />
            </Box>
          </Column>
        </Row>
        <Row>
          <Box paddingVertical={16} />
        </Row>
        <Row>
          <Column large={4} xlarge={4}>
            <Box marginBottom={24}>
              <BlogPost blog={blogPosts[2]} />
            </Box>
          </Column>
          <Column large={4} xlarge={4}>
            <Box marginBottom={24}>
              <BlogPost blog={blogPosts[3]} />
            </Box>
          </Column>
          <Column large={4} xlarge={4}>
            <Box marginBottom={24}>
              <BlogPost blog={blogPosts[4]} />
            </Box>
          </Column>
        </Row>
      </Container>
      <Box paddingVertical={72} alignItems="center">
        <Link to="https://blog.wetrust.io" isExternal>
          <Button appearance="outline" title="Read more" />
        </Link>
      </Box>
    </Box>
  );
};
