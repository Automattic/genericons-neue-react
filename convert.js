
// Convert svg files to React Components

const fs = require('fs');
const path = require('path');

// source directory of SVGs
srcdir = './node_modules/genericons-neue/svg-min/';
outdir = './icons/';

// React Component template
const template = (component, svg ) => {
    return `
import React from 'react';

const ${component} = (props) => {
	return (
        ${svg}
	);
};

export default ${component};

`;
}

// read files f
fs.readdir(srcdir, (err, files) => {
  files.forEach(file => {
        // setup names
        outfile = file.replace('./svg/', './icons/');
        outfile = outfile.replace('.svg', '.js');
        name = file.replace('./svg/', '');
        name = name.replace('.svg', '');
        component = name.replace(/-/g, ' ');

        // title case 
        component = component.split(' ')
            .map(i => i[0].toUpperCase() + i.substring(1))
            .join(' ');

        component = component.replace(/\s/g, '');

        // read in svg data
        data = String( fs.readFileSync( path.join( srcdir, file ) ) );

        // scrub the svg
        data = data.replace('xmlns="http://www.w3.org/2000/svg"', '');

        // add props to <g>
        data = data.replace( '<g>', '<g {...props}>' );
        
        // create component from template
        outdata = template( component, data );

        // output javascript file
        fs.writeFileSync( path.join( outdir, outfile ), outdata );

    });
})
