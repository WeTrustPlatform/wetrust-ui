import React from 'react';
import './WeTrustProductsBanner.css';

export const WeTrustProductsBanner = (): JSX.Element => {
  return (
    <div className="wrapper">
      <input id="check01" type="checkbox" name="menu" />
      <label className="wetrust-products-banner-title" htmlFor="check01">
        <span>WETRUST PRODUCTS</span>
        <i className="arrow-up" />
        <i className="arrow-down" />
      </label>
      <ul className="submenu">
        <li className="product--wrapper">
          <a className="product--link" href="https://www.wetrust.io">
            <img
              alt="WeTrust"
              src="https://d1pzjb43ehhiia.cloudfront.net/logo-images/wetrust-global-logo.svg"
            />
          </a>
        </li>
        <li className="product--wrapper">
          <a className="product--link" href="https://spring.wetrust.io">
            <img
              alt="Spring"
              src="https://d1pzjb43ehhiia.cloudfront.net/logo-images/spring-global-logo.svg"
            />
          </a>
        </li>
        <li className="product--wrapper">
          <a className="product--link" href="https://staking.wetrust.io">
            <img
              alt="Staking"
              src="https://d1pzjb43ehhiia.cloudfront.net/logo-images/staking-global-logo.svg"
            />
          </a>
        </li>
        <li className="product--wrapper">
          <a className="product--link" href="https://tlc.wetrust.io">
            <img
              alt="TLC"
              src="https://d1pzjb43ehhiia.cloudfront.net/logo-images/trusted-lending-circles-global-logo.svg"
            />
          </a>
        </li>
        <li className="product--wrapper">
          <a
            className="product--link"
            href="https://cryptounlocked.wetrust.io/"
          >
            <img
              alt="CryptoUnlocked"
              src="https://d1pzjb43ehhiia.cloudfront.net/logo-images/crypto-unlocked-global-logo.svg"
            />
          </a>
        </li>
        <li className="product--wrapper">
          <a className="product--link" href="https://trustedoracle.wetrust.io">
            <img
              alt="TrustedOracle"
              src="https://d1pzjb43ehhiia.cloudfront.net/logo-images/trusted-oracle-global-logo.svg"
            />
          </a>
        </li>
        <li className="product--wrapper">
          <a className="product--link" href="https://grants.wetrust.io">
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
