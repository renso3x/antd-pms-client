import * as React from 'react';
import { Breadcrumb } from 'antd';
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
      <Breadcrumb>
        <Breadcrumb.Item>
          {Icon}
          <span>{text}</span>
        </Breadcrumb.Item>
      </Breadcrumb>
    </StyledDiv>
  )
}