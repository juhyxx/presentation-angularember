import Ember from 'ember';

export default Ember.Component.extend({

	name: '',

	estimated: 0,

	parseInput: function(text) {
		text = text || '1m';

		var out = 0,
			splited = text.split(/\s*(\d+h)?\s?(\d+m)? ?(\d+s)?\s*/),
			ms = [
				60 * 60 * 1000,
				60 * 1000,
				1000
			];

		splited.shift();
		splited.pop();

		for (var i = 0; i < splited.length; i++) {
			if (splited[i]) {
				out += parseInt(splited[i]) * ms[i];
			}
		}
		return out;
	},

	actions: {
		add: function() {
			this.sendAction('action',
				this.get('name') || 'Task',
				this.parseInput(this.get('estimated')) || 2 * 60 * 1000
			);
		}
	}
});