import * as React from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Circle,
  G,
  Path,
  Line,
  Text,
} from 'react-native-svg';
import range from 'lodash.range';
import Cursor from './Cursor';
import {normalizeAngle} from './Math';
import Animated, {Easing} from 'react-native-reanimated';
import {ACTIVE_ICON, INACTIVE_ICON} from '../../../constants/design';
const {
  Value,
  multiply,
  sub,
  concat,
  lessThan,
  cond,
  and,
  greaterOrEq,
  block,
  debug,
  modulo,
  sqrt,
  add,
  or,
} = Animated;

const {width} = Dimensions.get('window');
const size = width / 1.5;
const padding = 25;
const radius = size / 2 - padding;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default ({r, stroke, currentValue, gradientColorFrom}) => {
  const start = new Value(0);
  const end = new Value(0);
  const circumference = radius * 2 * Math.PI;
  const delta = sub(
    cond(lessThan(start, end), end, add(end, Math.PI * 2)),
    start,
  );
  const strokeDashoffset = multiply(delta, radius);
  const rotateZ = concat(sub(Math.PI * 2, start), 'rad');

  const faceRadius = r - 5;
  const textRadius = r - 26;
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          transform: [{rotateZ}],
        }}>
        <Svg width={size} height={size}>
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
              <Stop offset="0" stopColor={ACTIVE_ICON} />
              <Stop offset="1" stopColor={INACTIVE_ICON} />
            </LinearGradient>
          </Defs>
          <AnimatedCircle
            strokeWidth={padding * 2}
            stroke="rgb(50, 50, 50)"
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}>
            <G>
              <Text
                fill={'#fff'}
                fontSize="25"
                textAnchor="middle"
                letterSpacing={4}>
                {250}
              </Text>
            </G>
          </AnimatedCircle>

          <AnimatedCircle
            strokeWidth={padding * 2}
            stroke="url(#grad)"
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeDasharray={`${circumference}, ${circumference}`}
            {...{strokeDashoffset}}
          />
        </Svg>
      </Animated.View>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Svg
          width={size - padding * 4}
          height={size - padding * 4}
          viewBox="0 0 88 88">
          {/*  <G>
            {range(28).map((i) => {
              const cos = Math.cos(((2 * Math.PI) / 28) * i);
              const sin = Math.sin(((2 * Math.PI) / 28) * i);

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
            })}
            <Text
              fill={gradientColorFrom}
              fontSize="25"
              textAnchor="middle"
              letterSpacing={4}>
              {currentValue}
            </Text>
          </G> */}
        </Svg>
      </Animated.View>
      <Cursor angle={start} {...{radius}} />
      <Cursor angle={end} {...{radius}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: size,
    width: size,
  },
});
