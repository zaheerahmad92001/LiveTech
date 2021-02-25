import * as React from 'react';
import Svg, {Defs, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function PowerPoint(props) {
  return (
    <Svg viewBox="0 0 19.617 21.675" {...props}>
      <Defs></Defs>
      <Path
        d="M18.894 2.891H8.779a.723.723 0 00-.722.722v14.449a.723.723 0 00.722.722h10.114a.723.723 0 00.722-.722V3.613a.723.723 0 00-.721-.722z"
        fill="#eceff1"
      />
      <Path
        fill={'#f57c00'}
        d="M16.004 15.895H8.78a.722.722 0 110-1.445h7.224a.722.722 0 110 1.445zM12.391 5.781a3.612 3.612 0 103.612 3.612h-3.612z"
      />
      <Path
        fill={'#f57c00'}
        d="M13.837 4.336v3.612h3.612a3.612 3.612 0 00-3.612-3.612z"
      />
      <Path
        d="M12.743.168a.71.71 0 00-.594-.157L.59 2.182a.72.72 0 00-.59.709v15.894a.722.722 0 00.59.709l11.559 2.167a.68.68 0 00.133.013.723.723 0 00.718-.721V.724a.721.721 0 00-.257-.556z"
        fill="#ef6c00"
      />
      <Path
        d="M4.181 15.895a.723.723 0 01-.722-.722V7.948a.723.723 0 01.722-.722h2.168a2.89 2.89 0 110 5.78H4.904v2.167a.723.723 0 01-.723.722zm.722-4.335h1.446a1.445 1.445 0 000-2.89H4.904z"
        fill="#fafafa"
      />
    </Svg>
  );
}

export default PowerPoint;
