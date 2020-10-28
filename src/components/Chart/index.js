import React from 'react';
import {Dimensions, View} from 'react-native';
import {
  bSplineInterpolation,
  ChartDot,
  ChartPath,
  ChartPathProvider,
  monotoneCubicInterpolation,
} from '@rainbow-me/animated-charts';

export const {width: SIZE} = Dimensions.get('window');

export const data = [
  {
    x: 0,
    y: 138.35,
  },
  {
    x: 1,
    y: 138.35,
  },
  {
    x: 2,
    y: 138.35,
  },
  {
    x: 3,
    y: 138.35,
  },
  {
    x: 4,
    y: 138.35,
  },
  {
    x: 5,
    y: 138.35,
  },
  {
    x: 6,
    y: 138.35,
  },
];

const Chart = () => {
  const points = React.useMemo(
    () => ({
      points: bSplineInterpolation({
        data,
        includeExtremes: true,
        range: 300, // ~1 year of working days
        yRange: [136, 140], // ADD THIS!
      }),
      smoothingStrategy: 'complex ',
    }),
    [data],
  );

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}>
      <ChartPathProvider data={points} gestureEnabled>
        <ChartPath height={SIZE / 2} stroke="yellow" width={SIZE} />
      </ChartPathProvider>
    </View>
  );
};

export {Chart};
