# Genericons Neue for React

A library to make it easy to use Genericons Neue within React.
You only need to import the icons you use, so no extra overhead.


### Usage

Here's an example usage:

```js

import React from 'react';
import CloudUpload from 'genericons-neue-react/icons/cloud-upload';

const MyUploadButton = () => {
    return (
        <button>
            <CloudUpload /> 
            <span> Upload a new image </span>
        </button>
    )
}
```

<img src="https://cldup.com/1fj7JeAf02.png" width="136" alt="Example"/>


You can also pass down any properties to the SVG, for example:

```js

import React from 'react';
import CloudUpload from 'genericons-neue-react/icons/cloud-upload';

const MyUploadButton = () => {
    return (
        <button>
            <CloudUpload fill="tomato" /> 
            <span> Upload a new image </span>
        </button>
    )
}
```

<img src="https://cldup.com/wwvHZ-gsAV.png" width="150" alt="Example with Fill"/>



### Build Process

- Copy automattic/genericons-neue/svg-min to ./svg
- Hand edit to remove style from activity, send-to-tablet, tablet
- Run convert.py which writes out js components


### TODO

- Update genericons-neue source to fix 3 icons that need hand editing
- Switch svg to git subtree/submodule
- Publish to NPM
 