/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": 8 + 'px',
    "--padding": 0 + 'px'
  },
  medium: {
    "--height": 12 + 'px',
    "--padding": 0 + 'px'
  },
  large: {
    "--height": 24 + 'px',
    "--padding": 4 + 'px'
  }
}

const ProgressBar = ({ value, size }) => {

  const styles = SIZES[size];

  let ProgressBarMarker
  size === 'small' ? ProgressBarMarker = ProgressBarMarkerSmall : ProgressBarMarker = ProgressBarMarkerLarge
  if (size === "small") {
    ProgressBarMarker = ProgressBarMarkerSmall;
  } else if (size === "medium") {
    ProgressBarMarker = ProgressBarMarkerMedium;
  } else if (size === "large") {
    ProgressBarMarker = ProgressBarMarkerLarge;
  } else {
    throw new Error(`Unrecognized Button size: ${size}`);
  }

  const valueMax = 100
  return <ProgressBarContainer style={styles} role="progressbar" 
    aria-valuenow={value} aria-valuemin="0" aria-valuemax={valueMax}>
     <ProgressBarMarker value={value/valueMax}></ProgressBarMarker>
  </ProgressBarContainer>
};

export default ProgressBar;

const ProgressBarContainer = styled.div`
width: 370px;
height: var(--height);
padding: var(--padding);
background: ${COLORS.transparentGray15};
box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
border-radius: 8px;
`

const ProgressBarMarkerBase = styled.div`
height: 100%;
background: ${COLORS.primary};
border-radius: ${props => props.value >= .98 ? '4px 4px 4px 4px' : '4px 0px 0px 4px' };
`

//Subtract padding left and right from 370. Should I have done this as an imported constant?
const ProgressBarMarkerSmall = styled(ProgressBarMarkerBase)`
  width: ${(props => props.value * 370)}px;
`

const ProgressBarMarkerMedium = styled(ProgressBarMarkerBase)`
  width: ${(props => props.value * 370)}px;
`

const ProgressBarMarkerLarge = styled(ProgressBarMarkerBase)`
  width: ${(props => props.value * 362)}px;
`
