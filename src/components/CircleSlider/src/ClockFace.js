import React, { PureComponent } from 'react';
import { G, Circle, Text, Line } from 'react-native-svg';
import range from 'lodash.range';
import PropTypes from 'prop-types';

export default class ClockFace extends PureComponent {

  static propTypes = {
    r: PropTypes.number,
    stroke: PropTypes.string,
    currentValue: PropTypes.string,
    gradientColorFrom: PropTypes.string,
  }

  render() {
    const { r, stroke ,currentValue,gradientColorFrom} = this.props;
    const faceRadius = r - 5;
    const textRadius = r - 26;

    return (
      <G>
        {
          range(28).map(i => {
            const cos = Math.cos(2 * Math.PI / 28 * i);
            const sin = Math.sin(2 * Math.PI / 28 * i);

            return (
              <Line
                key={i}
                stroke={stroke}
                strokeWidth={i % 4 === 0 ? 3 : 1}
                x1={cos * faceRadius}
                y1={sin * faceRadius}
                x2={cos * (faceRadius - 7)}
                y2={sin * (faceRadius - 7)}
              />
            );
          })
        }
     <Text
             
             fill={gradientColorFrom}
             fontSize="25"
             textAnchor="middle"
             letterSpacing={4}
           
           >
            {currentValue}
           </Text>
      </G>
    );
  }
}
