import React from 'react';

export const WeTrustProductsBanner = (): JSX.Element => {
  return (
    <div className="WeTrustProductsBanner">
      <input id="WeTrustProductsBanner--check" type="checkbox" name="menu" />
      <label
        className="WeTrustProductsBanner--title"
        htmlFor="WeTrustProductsBanner--check"
      >
        <span>WETRUST PRODUCTS</span>
        <i className="WeTrustProductsBanner--arrow__up" />
        <i className="WeTrustProductsBanner--arrow__down" />
      </label>
      <ul className="WeTrustProductsBanner--product__list">
        <li className="WeTrustProductsBanner--product__wrapper">
          <a
            className="WeTrustProductsBanner--product__link"
            href="https://www.wetrust.io"
          >
            <img
              alt="WeTrust"
              src="https://d1pzjb43ehhiia.cloudfront.net/logo-images/wetrust-global-logo.svg"
            />
          </a>
        </li>
        <li className="WeTrustProductsBanner--product__wrapper">
          <a
            className="WeTrustProductsBanner--product__link"
            href="https://spring.wetrust.io"
          >
            <img
              alt="Spring"
              src="https://d1pzjb43ehhiia.cloudfront.net/logo-images/spring-global-logo.svg"
            />
          </a>
        </li>
        <li className="WeTrustProductsBanner--product__wrapper">
          <a
            className="WeTrustProductsBanner--product__link"
            href="https://staking.wetrust.io"
          >
            <img
              alt="Staking"
              src="https://d1pzjb43ehhiia.cloudfront.net/logo-images/staking-global-logo.svg"
            />
          </a>
        </li>
        <li className="WeTrustProductsBanner--product__wrapper">
          <a
            className="WeTrustProductsBanner--product__link"
            href="https://tlc.wetrust.io"
          >
            <img
              alt="TLC"
              src="https://d1pzjb43ehhiia.cloudfront.net/logo-images/trusted-lending-circles-global-logo.svg"
            />
          </a>
        </li>
        <li className="WeTrustProductsBanner--product__wrapper">
          <a
            className="WeTrustProductsBanner--product__link"
            href="https://cryptounlocked.wetrust.io/"
          >
            <img
              alt="CryptoUnlocked"
              src="https://d1pzjb43ehhiia.cloudfront.net/logo-images/crypto-unlocked-global-logo.svg"
            />
          </a>
        </li>
        <li className="WeTrustProductsBanner--product__wrapper">
          <a
            className="WeTrustProductsBanner--product__link"
            href="https://trustedoracle.wetrust.io"
          >
            <img
              alt="TrustedOracle"
              src="https://d1pzjb43ehhiia.cloudfront.net/logo-images/trusted-oracle-global-logo.svg"
            />
          </a>
        </li>
        <li className="WeTrustProductsBanner--product__wrapper">
          <a
            className="WeTrustProductsBanner--product__link"
            href="https://grants.wetrust.io"
          >
            <img
              alt="Grants"
              src="https://d1pzjb43ehhiia.cloudfront.net/logo-images/wetrust-grants-global-logo.svg"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
