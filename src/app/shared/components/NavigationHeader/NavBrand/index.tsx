import { Link } from 'app/shared/components/Link';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import { BrandDiv, LogoImg, LogoSpan } from './styles';

interface INavBrandProps {
  imgSrc?: string;
  text: string;
}

export const NavBrand: React.FC<INavBrandProps> = ({ imgSrc, text }) => (
  <BrandDiv data-testid="div-brand">
    <Link data-testid="link-brand" to="/" replace={true}>
      {imgSrc ? (
        <LogoImg data-testid="image-brand" src={imgSrc} alt={text}></LogoImg>
      ) : (
        <LogoSpan data-testid="text-brand">{text}</LogoSpan>
      )}
    </Link>
  </BrandDiv>
);

NavBrand.propTypes = {
  imgSrc: PropTypes.string,
  text: PropTypes.string.isRequired,
};
