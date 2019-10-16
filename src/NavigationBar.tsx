import {
  Box,
  Container,
  Divider,
  Heading,
  Icon,
  Modal,
  Text,
  Visible,
} from 'paramount-ui';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { BlockchainAccountStatus } from './BlockchainAccountStatus';
import { Link, LinkProps } from './Link';
import { WeTrustProductsBanner } from './WeTrustProductsBanner';

const DesktopNavigationBarDivider = () => (
  <Divider
    orientation="vertical"
    style={{
      height: 30,
    }}
  />
);

const DesktopNavigationBarLink = (props: LinkProps) => {
  const { children, to, isExternal } = props;

  return (
    <Link
      to={to}
      isExternal={isExternal}
      style={{ textDecoration: 'none', height: '100%' }}
    >
      <Box justifyContent="center" height="100%" paddingHorizontal={16}>
        <Text color="link">{children}</Text>
      </Box>
    </Link>
  );
};

const DesktopNavigationBar = (props: NavigationBarProps): JSX.Element => {
  const { desktopLogoSrc, links } = props;

  return (
    <>
      <WeTrustProductsBanner />
      <Box
        flexDirection="row"
        height={80}
        justifyContent="space-between"
        paddingHorizontal={31}
        zIndex={1}
      >
        <img src={desktopLogoSrc} alt="desktop logo" />
        <Box flexDirection="row" alignItems="center">
          {links.map(link => (
            <>
              <DesktopNavigationBarLink key={link.title} {...link}>
                {link.title}
              </DesktopNavigationBarLink>
              <DesktopNavigationBarDivider />
            </>
          ))}
          <Box paddingLeft={16}>
            <BlockchainAccountStatus />
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

const MobileNavigationMenuLink = (props: LinkProps) => {
  const { children, to, onClick, isExternal } = props;

  return (
    <Link to={to} onClick={onClick} isExternal={isExternal}>
      <Box alignItems="center" paddingVertical={16}>
        <Heading size="xxlarge" color="link">
          {children}
        </Heading>
      </Box>
      <Divider />
    </Link>
  );
};

interface MobileNavigationMenuProps extends NavigationBarProps {
  onClick?: () => void;
}

const MobileNavigationMenu = (
  props: MobileNavigationMenuProps,
): JSX.Element => {
  const { onClick, links } = props;

  return (
    <>
      {links.map(link => (
        <MobileNavigationMenuLink key={link.title} onClick={onClick} {...link}>
          {link.title}
        </MobileNavigationMenuLink>
      ))}
    </>
  );
};

const MobileNavigationBar = (props: NavigationBarProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <Container fluid>
        <Box
          flexDirection="row"
          height={60}
          justifyContent="space-between"
          zIndex={1}
        >
          <Box flexDirection="row" alignItems="center">
            <BlockchainAccountStatus />
            <TouchableOpacity onPress={() => setIsMenuOpen(true)}>
              <View style={{ padding: 16 }}>
                <Icon name="menu" size={24} />
              </View>
            </TouchableOpacity>
          </Box>
        </Box>
        <Modal visible={isMenuOpen} onRequestClose={() => setIsMenuOpen(false)}>
          <Box flexDirection="row" height={60} justifyContent="flex-end">
            <TouchableOpacity onPress={() => setIsMenuOpen(false)}>
              <View style={{ padding: 16 }}>
                <Icon name="x" size={32} />
              </View>
            </TouchableOpacity>
          </Box>
          <Box paddingBottom={100}>
            <MobileNavigationMenu
              {...props}
              onClick={() => setIsMenuOpen(false)}
            />
          </Box>
          <WeTrustProductsBanner />
        </Modal>
      </Container>
      <Divider />
    </>
  );
};

export interface NavigationBarProps {
  mobileLogoSrc: string;
  desktopLogoSrc: string;
  links: (LinkProps & { title: string })[];
}

export const NavigationBar = (props: NavigationBarProps): JSX.Element => {
  return (
    <>
      <Visible xsmall small medium>
        <MobileNavigationBar {...props} />
      </Visible>
      <Visible large xlarge>
        <DesktopNavigationBar {...props} />
      </Visible>
    </>
  );
};
