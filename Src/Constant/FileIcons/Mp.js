import * as React from 'react';
import Svg, {Defs, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function MP(props) {
  return (
    <Svg viewBox="0 0 16.913 22.55" {...props}>
      <Defs></Defs>
      <Path fill={'#eb7d16'} d="M11.275 0v5.638h5.638z" />
      <Path
        fill={'#eb7d16'}
        d="M9.866 5.638V0H1.409A1.412 1.412 0 000 1.409v19.732a1.411 1.411 0 001.409 1.409H15.5a1.41 1.41 0 001.409-1.409V7.047h-5.634a1.412 1.412 0 01-1.409-1.409zm2.819 6.255a.705.705 0 01-1.409 0 2.035 2.035 0 00-1.409-1.763v7.488c0 1.185-1.237 2.114-2.819 2.114s-2.819-.929-2.819-2.114S5.466 15.5 7.047 15.5a3.591 3.591 0 011.409.285V9.161a.7.7 0 01.836-.692c1.174.22 3.392 1.219 3.392 3.423z"
      />
    </Svg>
  );
}

export default MP;