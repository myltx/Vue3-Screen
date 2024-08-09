// vue-echarts
import ECharts from 'vue-echarts';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import {
  BarChart,
  PieChart,
  MapChart,
  EffectScatterChart,
  LineChart,
  PictorialBarChart,
} from 'echarts/charts';
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
  VisualMapComponent,
  GeoComponent,
  MarkPointComponent,
} from 'echarts/components';
// import { Scatter3DChart } from 'echarts-gl/charts';
// import { Grid3DComponent } from 'echarts-gl/components';

use([
  CanvasRenderer,
  BarChart,
  PieChart,
  MapChart,
  EffectScatterChart,
  LineChart,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  TitleComponent,
  DatasetComponent,
  VisualMapComponent,
  GeoComponent,
  MarkPointComponent,
  PictorialBarChart,
]);

export const registerEcharts = (app: any) => {
  app.component('VChart', ECharts);
};
