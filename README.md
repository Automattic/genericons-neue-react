# Genericons Neue for React

A library to make it easy to use Genericons Neue within React.
You only need to import the icons you use, so no extra overhead.


### Usage

Here's an example on using within your React project.

1. First install the package

```bash
$ npm install --save genericons-neue-react
```

2. Using inside a Component

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



### Building this Package

The following info is for creating this package, if you just want to use the
icons in your project, see Usage above.

The source SVG files are from <a
href="https://github.com/automattic/genericons-neue">automattic/genericons-neue</a>
repository, which gets installed as a dev dependcy.

The `convert.js` script runs through the SVG files and creates React Components
(jsx), using the filename as the component name. Component names are CamelCase
so `cloud-upload.svg` becomes `CloudUpload`.

This build step can be run using: `npm run build` and creates the components in
`src` directory.

Next we convert the JSX components in `src` directory to vanilla javascript
using babel and store the results in `icons` directory.


