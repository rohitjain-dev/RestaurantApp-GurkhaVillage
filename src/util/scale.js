import ActualDimensions from './Device';
import * as CONST from './Constants';

/**
 * Function to scale a value based on the size of the screen size and the original
 * size used on the design.
 */
const {height, width} = ActualDimensions;

export default function (units = 1) {
	return width / CONST.SCREEN_WIDTH * units;
}

const verticalScale = size => height / CONST.SCREEN_HEIGHT * size;

export { verticalScale };