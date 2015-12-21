# C80ModalForms

Small gem containing single `modal_form.js` file provides basic functionality for using Bootstrap modal forms.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'c80_modal_forms'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install c80_modal_forms

## Usage

NOTE: This gem uses `jQuery` gem and `bootstrap-sass` gem.

Ensure that application's Gemfile contains these lines:
```ruby
gem 'jquery-rails'
gem 'bootstrap-sass'
```

You will need to add these lines into your `application.js`:
```js
//= require bootstrap/modal
//= require c80_modal_forms
```

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release` to create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

1. Fork it ( https://github.com/[my-github-username]/c80_modal_forms/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request