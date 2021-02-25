import * as React from 'react';
import Svg, {Defs, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function Excel(props) {
  return (
    <Svg viewBox="0 0 21.077 24.359" {...props}>
      <Defs></Defs>
      <Path
        d="M20.385 21.111h-9.7a.76.76 0 01-.693-.812V4.061a.76.76 0 01.693-.812h9.7a.76.76 0 01.693.812v16.238a.76.76 0 01-.693.812z"
        fill="#eceff1"
      />
      <Path
        fill={'#388e3c'}
        d="M13.051 8.121H9.803a.812.812 0 110-1.624h3.248a.812.812 0 110 1.624zM13.051 11.369H9.803a.812.812 0 010-1.624h3.248a.812.812 0 010 1.624zM13.051 14.616H9.803a.812.812 0 110-1.624h3.248a.812.812 0 110 1.624zM13.051 17.864H9.803a.812.812 0 010-1.624h3.248a.812.812 0 010 1.624zM17.922 8.121h-1.624a.812.812 0 010-1.624h1.624a.812.812 0 010 1.624zM17.922 11.369h-1.624a.812.812 0 010-1.624h1.624a.812.812 0 010 1.624zM17.922 14.616h-1.624a.812.812 0 110-1.624h1.624a.812.812 0 010 1.624zM17.922 17.864h-1.624a.812.812 0 010-1.624h1.624a.812.812 0 010 1.624z"
      />
      <Path
        d="M11.138.188a.525.525 0 00-.519-.172L.515 2.452a.783.783 0 00-.515.8v17.859a.784.784 0 00.515.8l10.1 2.436a.467.467 0 00.116.015.551.551 0 00.4-.187.92.92 0 00.229-.625V.811a.917.917 0 00-.222-.623z"
        fill="#2e7d32"
      />
      <Path
        d="M7.62 14.376l-1.645-1.883 1.666-2.143a.521.521 0 00-.822-.641l-1.544 1.985-1.3-1.486a.521.521 0 10-.784.686l1.433 1.638L3.171 14.4a.521.521 0 00.823.64l1.329-1.709 1.515 1.731a.52.52 0 10.784-.685z"
        fill="#fafafa"
      />
    </Svg>
  );
}

export default Excel;
