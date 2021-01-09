'use strict';

import initialize from './initialize';
import ConicSensorGraphics from './conic/conic-sensor-graphics';
import ConicSensorVisualizer from './conic/conic-sensor-visualizer';
import CustomPatternSensorGraphics from './custom/custom-pattern-sensor-graphics';
import CustomPatternSensorVisualizer from './custom/custom-pattern-sensor-visualizer';
import CustomSensorVolume from './custom/custom-sensor-volume';
import RectangularPyramidSensorVolume from './rectangular/rectangular-pyramid-sensor-volume';
import RectangularSensorGraphics from './rectangular/rectangular-sensor-graphics';
import RectangularSensorVisualizer from './rectangular/rectangular-sensor-visualizer';

initialize();

export default {
	ConicSensorGraphics: ConicSensorGraphics,
	ConicSensorVisualizer: ConicSensorVisualizer,
	CustomPatternSensorGraphics: CustomPatternSensorGraphics,
	CustomPatternSensorVisualizer: CustomPatternSensorVisualizer,
	CustomSensorVolume: CustomSensorVolume,
	RectangularPyramidSensorVolume: RectangularPyramidSensorVolume,
	RectangularSensorGraphics: RectangularSensorGraphics,
	RectangularSensorVisualizer: RectangularSensorVisualizer
};
