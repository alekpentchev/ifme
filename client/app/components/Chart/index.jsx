// @flow
/* eslint react/jsx-props-no-spreading: 0 */
import { Chart as ChartJS } from 'chart.js';
import React from 'react';
import { AreaChart, LineChart } from 'react-chartkick';

ChartJS.defaults.global.defaultFontFamily = 'Lato';

type chartShape = {
  xtitle?: string,
  ytitle?: string,
  data?: Object | any[],
  chartType: 'Line' | 'Area',
};

const colorSchemes = ['#6D0839', '#66118', '#7F503F', '#775577', '#CCAADD'];

export function Chart({ chartType, ...props }: chartShape) {
  return (
    <div role="img" aria-label="Canvas chart">
      {chartType === 'Line' ? (
        <LineChart {...props} colors={colorSchemes} />
      ) : (
        <AreaChart {...props} colors={colorSchemes} />
      )}
    </div>
  );
}
