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
              src="https://res.cloudinary.com/wetrust-cryptounlocked/image/upload/v1577775429/banner-we-trust.svg"
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
              src="https://res.cloudinary.com/wetrust-cryptounlocked/image/upload/v1577775428/banner-tlc.svg"
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
              src="https://res.cloudinary.com/wetrust-cryptounlocked/image/upload/v1577775427/banner-spring.svg"
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
              src="https://res.cloudinary.com/wetrust-cryptounlocked/image/upload/v1577775427/banner-staking.svg"
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
              src="https://res.cloudinary.com/wetrust-cryptounlocked/image/upload/v1577775427/banner-cu.svg"
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
              src="https://res.cloudinary.com/wetrust-cryptounlocked/image/upload/v1577775429/banner-to.svg"
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
              src="https://res.cloudinary.com/wetrust-cryptounlocked/image/upload/v1577775427/banner-grants.svg"
            />
          </a>
        </li>
        <li className="WeTrustProductsBanner--product__wrapper">
          <a
            className="WeTrustProductsBanner--product__link"
            href="https://id.wetrust.io"
          >
            <img
              alt="Identity"
              src="https://res.cloudinary.com/wetrust-cryptounlocked/image/upload/v1577775427/banner-identity-logo.svg"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
