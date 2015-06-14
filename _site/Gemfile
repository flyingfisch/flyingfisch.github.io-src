source 'https://rubygems.org'

# Specify your gem's dependencies in jekyll_figure.gemspec
gemspec

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']
