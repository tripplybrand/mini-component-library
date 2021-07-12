/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  //return <strong>{value}</strong>;
  const valueMax = 100
  return <ProgressBarBackground role="progressbar" 
    aria-valuenow={value} aria-valuemin="0" aria-valuemax={valueMax}>
     <ProgressBarMarker value={value/valueMax}></ProgressBarMarker>
  </ProgressBarBackground>
};

export default ProgressBar;

const ProgressBarBackground = styled.div`
width: 370px;
height: 24px;
background: ${COLORS.transparentGray15};
box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
border-radius: 8px;
`

//370 width of container - 8 for the 4px on either side = 362
const ProgressBarMarker = styled.div`
width: ${(props => props.value * 362)}px;
height: 16px;
background: ${COLORS.primary};
border-radius: ${props => props.value >= .98 ? '4px 4px 4px 4px' : '4px 0px 0px 4px' };
margin: 4px;
position: absolute;

`