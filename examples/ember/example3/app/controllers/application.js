import Ember from 'ember';

export default Ember.Controller.extend({
	list: [{
		name: 'task1',
		estimated: 5,
		duration: 62 * 60 * 1000

	}, {
		name: 'task2',
		estimated: 5,
		duration: 987654321
	}],

	isStopped: true,

	start: function() {
		var self = this;

		this.set('interval', setInterval(function() {
				self.tick();
			}, 500))
			.set('isStopped', false);
	},

	stop: function() {
		clearInterval(this.get('interval'));
		this.set('interval', undefined)
			.set('isStopped', true);
	},

	tick: function() {
		var now = new Date().getTime(),
			data = this.get('list')[0],
			progress = 0;

		progress = Math.round(((now - data.time) / data.estimated) * 100);

		Ember.set(this.list[0], 'duration', now - data.time);
		this.set('percentage', Math.min(progress, 100))
			.set('name', data.name + ' ' + progress + '%')
			.set('time', now - data.time);
	},

	actions: {
		add: function(name, estimated) {
			this.stop();
			this.list.unshiftObject({
				name: name,
				estimated: estimated,
				time: new Date().getTime(),
				duration: 0
			});
			this.start();
		},
		stop: function() {
			this.stop();
		}
	}
});