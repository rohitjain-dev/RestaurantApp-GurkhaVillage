import moment from 'moment';
import 'intl';
import 'intl/locale-data/jsonp/en';

/**
 * Provides formatted date using epoch imput.
 * @param {number} epoch - Time in unix time format.
 * @param {string} format - String format for date to be returned.
 */
export function getFormattedGenericDate (epoch, format) {
	return moment (epoch).format(format);
}

/**
 * Provides formatted currency amount for numeric amount value.
 * @param {number} amount - Specifies amount in numeric form.
 * @returns Formatted amount in INTL format.
 */
export function getFormattedCurrency(amount) {
	const floatValue = parseFloat(amount);
	return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 0 }).format(floatValue)
}