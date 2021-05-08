import React from 'react';

type Props = {
  children: React.ReactElement[];
};

function Header() {
  return null;
}

function Main() {
  return null;
}

function Footer() {
  return null;
}

class BaseLayout extends React.Component<Props, any> {
  static Header: React.FC = Header;
  static Main: React.FC = Main;
  static Footer: React.FC = Footer;

  render() {
    const { children } = this.props;

    if (!Array.isArray(children)) return;
    const header = children.find(({ type }) => type === Header);
    const footer = children.find(({ type }) => type === Footer);
    const main = children.find(({ type }) => type === Main);

    return (
      <div className="base-layout">
        <header>{header ? header.props.children : null}</header>
        <main>{main ? main.props.children : null}</main>
        <footer>{footer ? footer.props.children : null}</footer>
      </div>
    );
  }
}

export default BaseLayout;
