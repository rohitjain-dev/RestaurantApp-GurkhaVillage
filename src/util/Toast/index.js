import DefaultToast from './DefaultToastContainer';

/**
 * Shows a toast on screen.
 * @param {string} msg - String to show as toast message.
 */
export default function showToast(msg) {
	
	DefaultToast.show(msg);
	
}
