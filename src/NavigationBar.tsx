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

const DesktopNavigationBarDivider = (): JSX.Element => (
  <Divider
    orientation="vertical"
    style={{
      height: 30,
    }}
  />
);

const DesktopNavigationBarLink = (props: LinkProps): JSX.Element => {
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
      <Box
        flexDirection="row"
        height={80}
        justifyContent="space-between"
        paddingHorizontal={31}
        zIndex={1}
      >
        <Link style={{ display: 'flex', alignItems: 'center' }} to="/">
          <img src={desktopLogoSrc} alt="desktop logo" />
        </Link>
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

const MobileNavigationMenuLink = (props: LinkProps): JSX.Element => {
  const { children, to, onClick, isExternal } = props;

  return (
    <Link to={to} onClick={onClick} isExternal={isExternal}>
      <Box alignItems="center" paddingVertical={16}>
        <Heading weight="bold" size="xxlarge" color="link">
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
  const { mobileLogoSrc, mobileTopNode } = props;
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
          <Link
            style={{ display: 'flex', alignItems: 'center' }}
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src={mobileLogoSrc} alt="identity mobile logo" />
          </Link>
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
          {mobileTopNode}
          <Box
            flexDirection="row"
            height={60}
            paddingHorizontal={16}
            justifyContent="space-between"
            zIndex={1}
          >
            <Link
              style={{ display: 'flex', alignItems: 'center' }}
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src={mobileLogoSrc} alt="identity mobile logo" />
            </Link>
            <Box flexDirection="row" alignItems="center">
              <BlockchainAccountStatus />
              <TouchableOpacity onPress={() => setIsMenuOpen(false)}>
                <View style={{ padding: 16, paddingRight: 8 }}>
                  <Icon name="x" size={32} />
                </View>
              </TouchableOpacity>
            </Box>
          </Box>
          <Box paddingBottom={100}>
            <MobileNavigationMenu
              {...props}
              onClick={() => setIsMenuOpen(false)}
            />
          </Box>
        </Modal>
      </Container>
      <Divider />
    </>
  );
};

export interface NavigationBarProps {
  mobileLogoSrc: string;
  desktopLogoSrc: string;
  mobileTopNode?: React.ReactNode;
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
