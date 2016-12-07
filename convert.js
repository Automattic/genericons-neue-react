
// Convert svg files to React Components

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

// source directory of SVGs
srcdir = path.resolve( './node_modules/genericons-neue/svg-min/' );
outdir = path.resolve( './src/icons' );

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

const guarantee = ( fn, ... args ) => new Promise( ( resolve, reject ) => fn( ... args, ( error, result ) => {
	if ( error ) {
		return reject( error );
	}
	resolve( result );
} ) );
// read files f
guarantee( mkdirp, outdir )
.then( () => guarantee( fs.readdir, srcdir ) )
.then( files => Promise.all( files.map( file => {
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
  return guarantee(
		fs.writeFile,
		`${path.join( outdir, path.basename( outfile, '.js' ) )}.jsx`,
		outdata
	);
	
} ) ) )
.then(
	files => console.log( 'Completed generating %d icons in %s', files.length, outdir ),
	e => console.error( 'Failed to transform files', e )
)
