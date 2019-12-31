import React from 'react';

export interface FooterProps {
  tosLink?: string;
}

export const Footer = (props: FooterProps): JSX.Element => {
  const { tosLink } = props;

  return (
    <div className="Footer">
      <div className="Footer--sitemap">
        <div className="Footer--navigation">
          <a className="Footer--link__nav" href="/">
            Home
          </a>
          <a className="Footer--link__nav" href="https://www.wetrust.io">
            About us
          </a>
          <a
            className="Footer--link__nav"
            href={
              tosLink ||
              'https://cryptounlocked.wetrust.io/_Crypto_Unlocked_Terms_and_Conditions_v1.3.pdf'
            }
          >
            Terms and Conditions
          </a>
          <a
            className="Footer--link__nav"
            href="https://github.com/WeTrustPlatform/documents/blob/master/FinclusionLabs_PrivacyPolicy_October92018_GDPRCompliant.pdf"
          >
            Privacy Policy
          </a>
        </div>
        <div className="Footer--social">
          <a
            className="Footer--link__social Footer--link__facebook"
            href="https://www.facebook.com/wetrustplatform"
          >
            Facebook
          </a>
          <a
            className="Footer--link__social Footer--link__twitter"
            href="https://twitter.com/wetrustplatform"
          >
            Twitter
          </a>
          <a
            className="Footer--link__social Footer--link__blog"
            href="https://blog.wetrust.io/"
          >
            Blog
          </a>
        </div>
      </div>
      <span className="Footer--copyright">
        © WeTrust 2019 - All Right Reserved
      </span>
    </div>
  );
};
