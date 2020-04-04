# Mercari API server

Uses the mercari API I wrote [here](https://github.com/marvinody/mercari-js/) and provides quick wrappings around that.

I recommend deploying your own version using heroku (super simple)

- create heroku account and get cli tools
- `heroku login`
- `git clone https://github.com/marvinody/mercari-server`
- `heroku create <name of your app>` (maybe mercari-server-mine) or something silly
- `git push heroku master`

And now you have your own version!

But [here's](https://mercari-api.herokuapp.com/) one if you're lazy...

To search, just make an HTTP GET request to `https://mercari-api.herokuapp.com/api/search/<query>` and replace query with your wanted query.

Returns a JSON array of stuff, try it out. Currently limited to one page as a test.

If the service breaks, please reach out to me on the other repo by making an issue there since this doesn't really do much...
