import React from 'react';
import { Collapsible, Box, Text, Icon, useTheme, Spacing } from 'paramount-ui';

export interface FAQItem {
  title: string;
  content: string;
}

export interface FAQProps {
  faqs: FAQItem[];
}

export const FAQ = (props: FAQProps): JSX.Element => {
  const { faqs } = props;
  const theme = useTheme();

  const IconClose = (): JSX.Element => (
    <Icon name="minus" color={theme.colors.background.primaryDefault} />
  );
  const IconOpen = (): JSX.Element => (
    <Icon name="plus" color={theme.colors.background.primaryDefault} />
  );

  return (
    <Box>
      {faqs.map(faq => (
        <Collapsible
          key={faq.title}
          title={faq.title}
          overrides={{
            Touchable: {
              style: {
                alignItems: 'center',
                borderBottomColor: theme.colors.border.default,
                borderBottomWidth: 1,
                justifyContent: 'space-between',
                paddingVertical: 24,
              },
            },
            Title: {
              props: {
                size: 'large',
                weight: 'bold',
              },
            },
            IconClose: {
              component: IconClose,
            },
            IconOpen: {
              component: IconOpen,
            },
          }}
        >
          <Box>
            <Spacing size="large" />
            <Text>{faq.content}</Text>
          </Box>
        </Collapsible>
      ))}
    </Box>
  );
};
