# Alice in Tumblrland
##### Open a whole new era. Create your own Tumblr bot.
Are you interested in new Tumblr posts, trends or just want thousands of followers? Alice can help you do things quickly and easily.

> **Life found a way.** - Dr. Alan Grant

## Features

 - Start Today, run forever
 - Like, Reblog posts
 - Post images, texts
 - Explore and follow new blogs
 - Random-userlike experience
 - Flexible setting options

## What You Need
+ **Get an OAuth** key: [Tumblr api documentation](https://www.tumblr.com/docs/en/api/v2)
+ **Setup** your settings.js. The available settings the following:
```javascript
exports.tagsArray = ['fail', 'funny gifs', 'funny gif', 'epic fail', 'haha', 'lol', 'funny']
exports.commentsArray = ['awhhh *.*', '*.*', 'always reblog']
exports.postTypes = ['photo']

exports.blogName = 'your blog name'
exports.noteLimit = 5
exports.limit = 20
exports.maxLikeCount = 1
exports.maxActionPerMinute = 1

exports.consumerKey = 'your consumer key'
exports.consumerSecret = 'your consumer secret'
exports.token = 'your token'
exports.tokenSecret = 'your token secret'
```
+ **Start** Alice from inside the src directory.
``` 
node alice.js
```
```
Harvest started
Total following: 126
Tags are:  haha
Minimum note count: 700
------------------------------
Like post id: 167096891257  reblog_key: tjkBl9Vl
------------------------------
Harvest started
Total following: 126
Tags are:  lol
Minimum note count: 460
------------------------------
Like post id: 166927269501  reblog_key: Zgj6aX3y
```
## Requirements
+ Node.js [download](https://nodejs.org/en/#download)