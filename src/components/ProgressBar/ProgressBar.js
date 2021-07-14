/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": 8 + 'px',
    "--padding": 0 + 'px',
    "--border-radius": 4 + 'px'
  },
  medium: {
    "--height": 12 + 'px',
    "--padding": 0 + 'px',
    "--border-radius": 4 + 'px'
  },
  large: {
    "--height": 16 + 'px',
    "--padding": 4 + 'px',
    "--border-radius": 8 + 'px'
  }
}

const ProgressBar = ({ value, size }) => {

  const styles = SIZES[size];

  if(!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`)
  }

  const valueMax = 100
  return <ProgressBarContainer style={styles} role="progressbar" 
    aria-valuenow={value} aria-valuemin="0" aria-valuemax={valueMax}>
      <ProgressBarMarkerWrapper>
        <ProgressBarMarker style={{'--width': value + '%'}}>
          <VisuallyHidden>{value}</VisuallyHidden>
        </ProgressBarMarker>
     </ProgressBarMarkerWrapper>
  </ProgressBarContainer>
};

export default ProgressBar;

const ProgressBarContainer = styled.div`
background-color: ${COLORS.transparentGray15};
box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
border-radius: var(--border-radius);
padding: var(--padding);
`

const ProgressBarMarkerWrapper = styled.div`
border-radius: 4px;
overflow: hidden;
`

const ProgressBarMarker = styled.div`
width: var(--width);
height: var(--height);
background: ${COLORS.primary};
border-radius: '4px 0px 0px 4px';
`

