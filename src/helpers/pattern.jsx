global.Buffer = require('buffer').Buffer;
import React from 'react';
import { Buffer } from 'buffer';
import GeoPattern from 'geopattern';
import { SvgXml } from 'react-native-svg';

// generates the pattern for the card and the queue page
// the ones on signmeup include the  · with tag 
export const getPattern = (name, ended) => {
  let p; 
    p = (ended === 1) ? GeoPattern.generate(name, { color: "#d3d3d3"}) : GeoPattern.generate(name);
    p = p.toSvg();
  return <SvgXml xml={p} width='100%' height='102%' />;
};
