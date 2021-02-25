import * as React from 'react';
import Svg, {Defs, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function Doc(props) {
  return (
    <Svg viewBox="0 0 15.855 24.479" {...props}>
      <Defs></Defs>
      <Path
        d="M15.855 6.7v16.2a1.5 1.5 0 01-1.41 1.577H1.411A1.5 1.5 0 01.001 22.9V1.577A1.5 1.5 0 011.411 0H9.86z"
        fill="#518ef8"
      />
      <Path
        fill={'#fff'}
        d="M3.394 12.29h9.066v1.007H3.394zM3.394 14.54h9.066v1.007H3.394zM3.394 16.79h9.066v1.007H3.394zM3.394 19.04h6.447v1.007H3.394z"
      />
      <Path d="M10.065 6.559l5.79 2.385v-2.24l-3.283-.969z" fill="#3a5bbc" />
      <Path
        d="M15.855 6.7h-5.128A1.577 1.577 0 019.15 5.123V0z"
        fill="#acd1fc"
      />
    </Svg>
  );
}

export default Doc;