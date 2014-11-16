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

	start: function() {
		var self = this,
			interval = setInterval(function() {
				self.tick();
			}, 500);

		this.set('interval', interval);
	},

	stop: function() {
		clearInterval(this.get('interval'));
		this.set('interval', undefined);
	},

	tick: function() {
		var now = new Date().getTime(),
			data = this.get('list')[0],
			progress = 0;

		progress = Math.round(((now - data.time) / data.estimated) * 100);
		this.set('percentage', Math.min(progress, 100));
		this.set('name', data.name + ' ' + progress + '%');
		this.set('time', now - data.time);
	},

	actions: {
		add: function(name, estimated) {
			this.stop();
			this.list.unshiftObject({
				name: name,
				estimated: estimated,
				time: new Date().getTime()
			});
			this.start();
		},
		stop: function() {
			console.info('stop');
			this.stop();
		}
	}
});