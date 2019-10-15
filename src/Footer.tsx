import {
  Box,
  Column,
  Container,
  Paragraph,
  Row,
  Text,
  Visible,
} from 'paramount-ui';
import React from 'react';

import { Link, LinkProps } from './Link';

export const MobileFooter = (): JSX.Element => {
  return (
    <Container>
      <Row>
        <Column medium={6} xsmall={6}>
          <Box
            backgroundColor="white"
            paddingTop={40}
            paddingBottom={50}
            borderTopColor="#eee"
            borderTopWidth={1}
            marginTop={70}
          >
            <Box marginVertical={5}>
              <FooterLink to="/">Home</FooterLink>
            </Box>
            <Box marginVertical={5}>
              <FooterLink to="https://www.wetrust.io">About us</FooterLink>
            </Box>
            <Box marginVertical={5}>
              <FooterLink to="/_Crypto_Unlocked_Terms_and_Conditions_v1.3.pdf">
                Terms and Conditions
              </FooterLink>
            </Box>
            <Box marginVertical={5}>
              <FooterLink to="https://github.com/WeTrustPlatform/documents/blob/master/FinclusionLabs_PrivacyPolicy_October92018_GDPRCompliant.pdf">
                Privacy Policy
              </FooterLink>
            </Box>
          </Box>
        </Column>
        <Column medium={6} xsmall={6}>
          <Box
            backgroundColor="white"
            paddingTop={40}
            paddingBottom={50}
            borderTopColor="#eee"
            borderTopWidth={1}
            marginTop={70}
          >
            <Box marginVertical={5}>
              <FooterLink
                color="#3291e9"
                to="https://www.facebook.com/wetrustplatform"
              >
                Facebook
              </FooterLink>
            </Box>
            <Box marginVertical={5}>
              <FooterLink
                color="#00c6ff"
                to="https://twitter.com/wetrustplatform"
              >
                Twitter
              </FooterLink>
            </Box>
            <Box marginVertical={5}>
              <FooterLink color="#00d383" to="https://blog.wetrust.io/">
                Blog
              </FooterLink>
            </Box>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column medium={12} xsmall={12}>
          <Box marginBottom={40}>
            <Text align="center">© WeTrust 2019 - All Right Reserved</Text>
          </Box>
        </Column>
      </Row>
    </Container>
  );
};

export const DesktopFooter = (): JSX.Element => {
  return (
    <Box
      backgroundColor="white"
      paddingTop={40}
      paddingBottom={70}
      borderTopColor="#eee"
      borderTopWidth={1}
      alignItems="center"
    >
      <Paragraph>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="https://www.wetrust.io">About us</FooterLink>
        <FooterLink to="https://cryptounlocked.wetrust.io/_Crypto_Unlocked_Terms_and_Conditions_v1.3.pdf">
          Terms and Conditions
        </FooterLink>
        <FooterLink to="https://github.com/WeTrustPlatform/documents/blob/master/FinclusionLabs_PrivacyPolicy_October92018_GDPRCompliant.pdf">
          Privacy Policy
        </FooterLink>
      </Paragraph>
      <Box marginVertical={24}>
        <Paragraph>
          <FooterLink
            color="#3291e9"
            to="https://www.facebook.com/wetrustplatform"
          >
            Facebook
          </FooterLink>
          <FooterLink color="#00c6ff" to="https://twitter.com/wetrustplatform">
            Twitter
          </FooterLink>
          <FooterLink color="#00d383" to="https://blog.wetrust.io/">
            Blog
          </FooterLink>
        </Paragraph>
      </Box>
      <Text>© WeTrust 2019 - All Right Reserved</Text>
    </Box>
  );
};

interface FooterLinkProps extends LinkProps {
  color?: string;
}

export const FooterLink = (props: FooterLinkProps): JSX.Element => {
  const { color } = props;

  const style = {
    color: color || '#7e7e7e',
    fontWeight: color ? 'bold' : 'normal',
    padding: '0 15px',
  } as const;

  return <Link style={style} isExternal {...props} />;
};

export const Footer = (): JSX.Element => {
  return (
    <>
      <Visible xsmall small medium>
        <MobileFooter />
      </Visible>
      <Visible large xlarge>
        <DesktopFooter />
      </Visible>
    </>
  );
};
