import moment from 'moment';

/**
 * Provides formatted date using epoch imput.
 * @param {number} epoch - Time in unix time format.
 * @param {string} format - String format for date to be returned.
 */
export function getFormattedGenericDate (epoch, format) {
	return moment (epoch).format(format);
}
