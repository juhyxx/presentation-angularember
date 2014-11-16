import Ember from 'ember';

function formatInterval(input) {
	var seconds = Math.round(input / 1000),
		interval = {
			h: Math.floor(((seconds / 86400) % 1) * 24),
			m: Math.floor(((seconds / 3600) % 1) * 60),
			s: Math.round(((seconds / 60) % 1) * 60)
		},
		out = [];

	if (interval.h > 0) {
		out.push(interval.h + 'h');
	}

	if (interval.m > 0) {
		out.push(interval.m + 'm');
	}

	if (interval.s > 0) {
		out.push(interval.s + 's');
	}
	return out.join(' ');
}

export {
	formatInterval
};

export default Ember.Handlebars.makeBoundHelper(formatInterval);