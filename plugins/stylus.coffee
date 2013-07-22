### A Wintersmith plugin. ###

fs = require 'fs'
st = require 'stylus'
nib = require 'nib'

module.exports = (env, callback) ->
  # *env* is the current wintersmith environment
  # *callback* should be called when the plugin has finished loading

  class Stylus extends env.ContentPlugin
    ### Prepends 'Wintersmith is awesome' to text files. ###

    constructor: (@filepath, @text) ->
      console.log('')

    getFilename: ->
      # filename where plugin is rendered to, this plugin uses the
      @filepath.relative.replace /styl$/ , 'css'

    getView: -> (env, locals, contents, templates, callback) ->
      # note that this function returns a function, you can also return a string
      # to use a view already added to the env, see env.registerView for more

      # this view simply passes the text to the renderer
      st(@text).use(nib()).include('./contents/style/')
                          .import('nib')
                          .import('thc')
                          .render (err,css) ->
                            callback null, new Buffer(css || '')

  Stylus.fromFile = (filepath, callback) ->
    fs.readFile filepath.full, (error, result) ->
      if not error?
        plugin = new Stylus filepath, result.toString()
      callback error, plugin

  # register the plugin to intercept .txt and .text files using a glob pattern
  # the first argument is the content group the plugin will belong to
  # i.e. directory grouping, contents.somedir._.text is an array of all
  #      plugin instances beloning to the text group in somedir
  env.registerContentPlugin 'contents', '**/*.styl', Stylus

  # tell plugin manager we are done
  callback()
