window.App = Ember.Application.create();

App.Router.map(function() {
	this.resource('count', {
		path: '/'
	});
});

App.CountController = Ember.Controller.extend({
	range1: 0,
	range2: 0,
	text1: 0,
	text2: 0,

	actions: {
		count: function() {
			this.set('output1', parseInt(this.get('range1'), 10) + parseInt(this.get('range2'), 10));
			this.set('output2', parseInt(this.get('text1'), 10) + parseInt(this.get('text2'), 10));
		}
	}
});