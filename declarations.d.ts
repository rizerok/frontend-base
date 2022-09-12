// env client variables
declare const WORK_LAYOUT: boolean;
// modules
declare module '*.scss' {
  const content: {[className: string]: string};
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.bmp' {
  const content: string;
  export default content;
}

declare module '*.ttf' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  import React from 'react';

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.svg?url' {
  const src: string;
  export default src;
}

declare module '*.md' {
  const content: string;
  export default content;
}
