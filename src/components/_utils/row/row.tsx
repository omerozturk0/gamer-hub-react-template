import React from 'react';
import { Row, Col, RowProps, ColProps } from 'react-bootstrap';

type Props = {
  children: React.ReactElement[] | React.ReactElement;
  rowProps?: RowProps;
  cols?: ColProps[];
};

export default function row({ children, rowProps, cols }: Props) {
  let renderComponent;
  if (Array.isArray(children)) {
    renderComponent = children.map((child, key) => (
      <Col {...(cols || [])[key]} key={key}>
        {child}
      </Col>
    ));
  } else {
    renderComponent = <Col {...cols}>{children}</Col>;
  }

  return <Row {...rowProps}>{renderComponent}</Row>;
}
