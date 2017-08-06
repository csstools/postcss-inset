// tooling
const postcss = require('postcss');

// side properties
const properties = ['top', 'right', 'bottom', 'left'];

// inset plugin
module.exports = postcss.plugin('postcss-inset', () => (root) => {
	root.walkDecls('inset', (decl) => {
		// space-separated side values (top, right, bottom, left)
		const values = postcss.list.space(decl.value);

		// conditionally add a right value
		if (values.length === 1) {
			values.push(values[0]);
		}

		// conditionally add a bottom value
		if (values.length === 2) {
			values.push(values[0]);
		}

		// conditionally add a left value
		if (values.length === 3) {
			values.push(values[1]);
		}

		// only transform up to 4 side values
		if (values.length === 4) {
			// for each side property
			properties.forEach((property, index) => {
				// create a new declaration for the side
				decl.cloneBefore({
					prop: property,
					value: values[index]
				});
			});
		}

		decl.remove();
	});
});
