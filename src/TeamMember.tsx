import { Box, Heading, Divider, Text, Avatar, Visible } from 'paramount-ui';
import React from 'react';

import { Link } from './Link';

const LinkedInIcon = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="#909090"
        fillRule="evenodd"
        d="M19.102 18.122h-2.837v-4.425c0-.728-.061-1.253-.183-1.577-.224-.545-.661-.818-1.312-.818-.65 0-1.108.243-1.373.728-.203.363-.305.899-.305 1.606v4.486h-2.806V9.06H13v1.243h.03c.204-.404.529-.738.976-1 .489-.324 1.058-.486 1.709-.486 1.322 0 2.247.415 2.776 1.243.407.667.61 1.698.61 3.092v4.971zM8.308 7.33c-.338.339-.74.508-1.206.508-.465 0-.868-.17-1.206-.508a1.648 1.648 0 0 1-.508-1.207c0-.465.17-.867.508-1.206.338-.338.74-.508 1.206-.508.466 0 .868.17 1.206.508.34.339.508.741.508 1.206 0 .466-.169.868-.508 1.207zm-2.43 10.793h2.938V8.816H5.878v9.306zm14.63-14.63C18.253 1.24 15.417.077 12 0 8.582.076 5.746 1.24 3.493 3.493 1.239 5.746.075 8.583 0 12c.075 3.418 1.24 6.254 3.493 8.507C5.746 22.761 8.582 23.924 12 24c3.417-.076 6.254-1.24 8.507-3.493C22.761 18.254 23.924 15.418 24 12c-.076-3.417-1.24-6.254-3.493-8.507z"
      />
    </svg>
  );
};

const TwitterIcon = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
    >
      <path
        fill="#909090"
        fillRule="evenodd"
        d="M19.123 8.789c.3-.226.592-.488.873-.789.282-.3.498-.6.648-.901-.488.263-1.052.432-1.69.507.6-.413 1.051-1.014 1.352-1.803-.601.376-1.295.639-2.084.789-1.09-1.09-2.338-1.305-3.747-.648-1.408.657-2 1.85-1.774 3.577-1.54-.113-2.837-.479-3.888-1.099a11.845 11.845 0 0 1-2.76-2.225 3.247 3.247 0 0 0-.254 2.48c.244.863.648 1.464 1.212 1.802-.527-.037-.978-.17-1.353-.395.037.902.282 1.606.733 2.113.45.507 1.032.873 1.746 1.099-.45.112-.901.132-1.352.056.413 1.315 1.39 2.066 2.93 2.254-.564.45-1.278.808-2.141 1.07a5.889 5.889 0 0 1-2.535.225c.676.451 1.427.817 2.253 1.099.826.282 1.784.404 2.873.366 2.705-.15 4.854-1.08 6.451-2.789 1.596-1.708 2.431-3.971 2.507-6.788M12.25 0c3.417.076 6.253 1.24 8.507 3.493 2.254 2.254 3.417 5.09 3.493 8.507-.076 3.418-1.24 6.253-3.493 8.507-2.254 2.254-5.09 3.417-8.507 3.493-3.418-.076-6.254-1.24-8.507-3.493C1.489 18.253.325 15.418.25 12c.075-3.417 1.24-6.253 3.493-8.507C5.996 1.239 8.832.076 12.25 0"
      />
    </svg>
  );
};

export interface TeamMemberProps {
  avatarUrl: string;
  fullName: string;
  linkedInUrl: string;
  twitterUrl: string;
  bio: string;
  fullNameColorCode?: string;
}

export const TeamMember = (props: TeamMemberProps): JSX.Element => {
  const {
    avatarUrl,
    fullName,
    linkedInUrl,
    twitterUrl,
    bio,
    fullNameColorCode,
  } = props;

  return (
    <Box
      paddingHorizontal={32}
      paddingTop={48}
      paddingBottom={48}
      borderRadius={8}
      backgroundColor="#fff"
      height="100%"
    >
      <Box flexDirection="row" paddingBottom={24} alignItems="center">
        <Box width={96} alignItems="center">
          <Avatar
            source={{ uri: avatarUrl }}
            size={94}
            overrides={{
              Root: {
                style: {
                  borderColor: fullNameColorCode,
                },
              },
            }}
          />
        </Box>
        <Box marginLeft={16} marginTop={32}>
          <Visible xsmall small medium xlarge>
            <Heading size="xlarge" color={fullNameColorCode}>
              {fullName}
            </Heading>
          </Visible>
          <Visible large>
            <Heading size={22} weight="bold" color={fullNameColorCode}>
              {fullName}
            </Heading>
          </Visible>
          <Box flexDirection="row" marginTop={16}>
            <Box>
              <Link to={linkedInUrl} isExternal>
                <LinkedInIcon />
              </Link>
            </Box>
            <Box marginLeft={8}>
              <Link to={twitterUrl} isExternal>
                <TwitterIcon />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider color="#e1e1e1" />
      <Box marginTop={24}>
        <Text size="large">{bio}</Text>
      </Box>
    </Box>
  );
};
