import React from 'react';
import { Container, Row, Col, RowProps, ColProps, ContainerProps } from 'react-bootstrap';

type Props = {
  children: React.ReactElement | React.ReactElement[];
  containerProps?: ContainerProps;
  rowProps?: RowProps;
  colProps?: ColProps;
};

export default function contained({ containerProps, children, rowProps, colProps }: Props) {
  return (
    <Container {...containerProps}>
      <Row {...rowProps}>
        <Col {...colProps}>{children}</Col>
      </Row>
    </Container>
  );
}
