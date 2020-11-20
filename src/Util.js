const path = require('path');

/**
 * The util class.
 * @class
 * @hideconstructor
 */
class Util {

	/**
	 * Get the current directory!
	 * @static
	 * @type {string}
	 * @returns {string}
	 */
	static get directory() {
		return `${path.dirname(require.main.filename)}${path.sep}`;
	}

}

module.exports = Util;
