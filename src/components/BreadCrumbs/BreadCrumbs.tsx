import * as React from 'react';
import { Row, Col, Breadcrumb } from 'antd';
import { StyledDiv } from './styles';

interface Props {
  icon: React.ReactNode
  text: string;
}

export const BreadCrumbs:React.FC<Props> = ({
  icon: Icon,
  text
}) => {
  return (
    <StyledDiv>
      <Row>
        <Col span={12}>
          <Breadcrumb>
            <Breadcrumb.Item>
              {Icon}
              <span>{text}</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </StyledDiv>
  )
}