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
[25/03/2019 22:57:00.675] [LOG]    Harvest started
[25/03/2019 22:57:00.675] [LOG]    Following cache: 677
[25/03/2019 22:57:00.675] [LOG]    Tags are:  cute
[25/03/2019 22:57:00.675] [LOG]    Minimum note count: 696
[25/03/2019 22:57:00.676] [LOG]    ------------------------------
[25/03/2019 22:58:00.677] [LOG]    Like post id: 167096891257  reblog_key: tjkBl9Vl
[25/03/2019 22:58:00.677] [LOG]    ------------------------------
[25/03/2019 22:58:00.678] [LOG]    Harvest started
[25/03/2019 22:58:00.678] [LOG]    Following cache: 677
[25/03/2019 22:58:00.678] [LOG]    Tags are:  forest
[25/03/2019 22:58:00.678] [LOG]    Minimum note count: 480
[25/03/2019 22:58:00.679] [LOG]    ------------------------------
[25/03/2019 22:58:00.679] [LOG]    Like post id: 166927269501  reblog_key: Zgj6aX3y
```
## Requirements
+ Node.js [download](https://nodejs.org/en/#download)