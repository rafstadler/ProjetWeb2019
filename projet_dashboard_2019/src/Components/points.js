import React, { PureComponent } from 'react';
import {  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

export default class Points extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/uLysj0u2/';

  render() {
    return (
      <ScatterChart
        width={400}
        height={400}
        margin={{
          top: 20, right: 75 , bottom: 20, left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="stations" />
        <YAxis type="text" dataKey="y" name="weight" unit="m" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={data} fill="#8884d8" />
      </ScatterChart>
    );
  }
}