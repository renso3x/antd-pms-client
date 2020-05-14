import * as React from 'react';
import { NumberCardStyles } from './styles';

interface Props {
  title: string;
  number: number;
}

export const NumberCard: React.FC<Props> = ({
  title,
  number
}) => {
  return (
    <NumberCardStyles>
      <p className="title">{title}</p>
      <p className="number">{number}</p>
    </NumberCardStyles>
  )
};
