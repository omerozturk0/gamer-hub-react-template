import React from 'react';
import HeaderElements from './partials/HeaderElements/HeaderElements';
import HeaderNavigation from './partials/HeaderNavigation/HeaderNavigation';

export default function header() {
  return (
    <div className="header">
      <HeaderElements />
      <HeaderNavigation />
    </div>
  );
}
