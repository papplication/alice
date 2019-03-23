var utils = require('./libs/utils.js')
var settings = require('./settings.js')
var wrapper = require('./libs/wrapper.js')
var spinner = require('cli-spinner').Spinner
require('console-stamp')(console, {
    pattern: 'dd/mm/yyyy HH:MM:ss.l',
    include: ['log', 'error'],
    colors: {
        stamp: 'yellow',
        label: 'green'
    }
});

var loader = new spinner('%s')
loader.setSpinnerString('⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏')
loader.start()

wrapper.getFollowings(0)

var CronJob = require('cron').CronJob

new CronJob('1-59/1 * * * *', function() {
    loader.stop(true)
	console.log('------------------------------')
    console.log('Harvest started')
    console.log('Following cache: %d', wrapper.getFollowingsLength())
    wrapper.init()

    console.log('Tags are: ', wrapper.getTags())
    console.log('Minimum note count: %d', settings.noteLimit)
   	console.log('------------------------------')
    wrapper.reset()
    wrapper.doHarvest(function() {
        loader.start()
    })
}, null, true, "America/Los_Angeles")

new CronJob('0 0-23/1 * * *', function() {
    loader.stop(true)
	console.log('------------------------------')
	console.log('Clear history')
    wrapper.clear()
}, null, true, "America/Los_Angeles")