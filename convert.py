#!/usr/bin/env python

## Convert svg files to React Components
import glob
import sys

# 1. Get List of Files
# 2. Get Component name from filename
# 3. Cleave SVG
# 4. Output React Component

template = """
import React from 'react';

const {component} = (props) => {{
	return (
        {svg}
	);
}};

export default {component};

"""

files = glob.glob("./node_modules/genericons-neue/svg-min/*.svg")
for f in files:
    ## setup names
    outfile = f.replace('./svg/', './icons/')
    outfile = outfile.replace('.svg', '.js')
    name = f.replace('./svg/', '')
    name = name.replace('.svg', '')
    component =name.replace('-', ' ')
    component = component.title()
    component = component.replace(' ', '')

    print("{} => {} => {}".format(name, component, outfile))

    # read in svg data
    inf = open(f, "r")
    data = inf.read()
    inf.close()

    # scrub the svg
    data = data.replace('xmlns="http://www.w3.org/2000/svg"', '')
    data = data.replace('<g>', '<g {...props}>')
    # create component from template
    outdata = template.format(component=component, svg=data)

    # output javascript file
    out = open(outfile, 'w')
    out.write(outdata)
    out.close()
