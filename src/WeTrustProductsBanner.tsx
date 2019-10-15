import { Box, useTheme, useLayout } from 'paramount-ui';
import React from 'react';

interface ProductLinkProps {
  to: string;
  children?: React.ReactNode;
}

const ProductLink = (props: ProductLinkProps): JSX.Element => {
  const { to, children } = props;
  const theme = useTheme();

  return (
    <a
      href={to}
      style={{
        fontFamily: theme.fontFamilies.text,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {children}
    </a>
  );
};

export const WeTrustProductsBanner = (): JSX.Element => {
  const { getResponsiveValue } = useLayout();

  const paddingBottom = getResponsiveValue({
    xsmall: '16px',
    xlarge: '0px',
  });

  return (
    <Box
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#222222"
      flexWrap="wrap"
      height={55}
    >
      <Box paddingRight={40} paddingBottom={paddingBottom}>
        <ProductLink to="https://www.wetrust.io">
          <img
            alt="WeTrust"
            src="https://d1pzjb43ehhiia.cloudfront.net/logo-images/wetrust-global-logo.svg"
          />
        </ProductLink>
      </Box>
      <Box paddingRight={40} paddingBottom={paddingBottom}>
        <ProductLink to="https://spring.wetrust.io">
          <img
            alt="Spring"
            src="https://d1pzjb43ehhiia.cloudfront.net/logo-images/spring-global-logo.svg"
          />
        </ProductLink>
      </Box>
      <Box paddingRight={40} paddingBottom={paddingBottom}>
        <ProductLink to="https://staking.wetrust.io">
          <img
            alt="Staking"
            src="https://d1pzjb43ehhiia.cloudfront.net/logo-images/staking-global-logo.svg"
          />
        </ProductLink>
      </Box>
      <Box paddingRight={40} paddingBottom={paddingBottom}>
        <ProductLink to="https://tlc.wetrust.io">
          <img
            alt="TLC"
            src="https://d1pzjb43ehhiia.cloudfront.net/logo-images/trusted-lending-circles-global-logo.svg"
          />
        </ProductLink>
      </Box>
      <Box paddingRight={40} paddingBottom={paddingBottom}>
        <ProductLink to="https://cryptounlocked.wetrust.io/">
          <img
            alt="CryptoUnlocked"
            src="https://d1pzjb43ehhiia.cloudfront.net/logo-images/crypto-unlocked-global-logo.svg"
          />
        </ProductLink>
      </Box>
      <Box paddingRight={40} paddingBottom={paddingBottom}>
        <ProductLink to="https://trustedoracle.wetrust.io">
          <img
            alt="TrustedOracle"
            src="https://d1pzjb43ehhiia.cloudfront.net/logo-images/trusted-oracle-global-logo.svg"
          />
        </ProductLink>
      </Box>
      <Box paddingRight={40} paddingBottom={paddingBottom}>
        <ProductLink to="https://grants.wetrust.io">
          <img
            alt="Grants"
            src="https://d1pzjb43ehhiia.cloudfront.net/logo-images/wetrust-grants-global-logo.svg"
          />
        </ProductLink>
      </Box>
    </Box>
  );
};
