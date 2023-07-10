import React from 'react';
import { useTheme } from 'styled-components';
import { Wrapper, Wrap } from './DesktopMain.style';

function DesktopMain() {
  const theme = useTheme();
  return (
    <Wrapper colors={theme.colors}>
      <Wrap>
        {/* <ImageSlider />
                <Authentication /> */}
      </Wrap>
    </Wrapper>
  );
}

export default DesktopMain;
