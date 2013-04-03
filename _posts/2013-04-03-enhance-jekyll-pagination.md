---
layout: post
title: "Enhance Jekyll Pagination"
description: "<p>增强 Jekyll 的分页功能。</p><p>Coming Soon!</p>"
category: javascript
tags: [jekyll, pagination]
---
{% include JB/setup %}

增强 Jekyll 的分页功能。

[Pagination by 4What](http://4what.github.com/cn/sample/javascript/util.jquery.js.html?method=paginator)

```javascript
	/**
	 * @requires jQuery 1.3.2, $js.url
	 * @param {Object|String} target
	 * @param {Object} options
	 * @author 4what
	 */
	paginator: function(target, options) {
		var
		that = this,

		defaults = {
			debug: false, // {Boolean} (!ajax)

			ajax: false, // {Boolean}
			callback: new Function(), // {Function} (*: ajax)

			param: "", // {String} (*: !ajax)
			data: null, // {Object} (!ajax)

			current: 1, // {Number} (*: !ajax)
			pages: 5, // {Number}

			records: 0, // {Number} (*)
			rows: 10, // {Number}

			ellipsis: true, // {Boolean}

			previous: "Previous", // {String}
			next: "Next", // {String}
			first: "First", // {String}
			last: "Last" // {String}
		},
		settings = $.extend(defaults, options);

		// init
		function init(index) {
			var totalPages = Math.ceil(settings.records / settings.rows);

			if (totalPages > 1) {
				var
				params = {},
				query = "?";

				if (!settings.ajax) {
					if (window.location.search) {
						var
						search = $js.url.params(),
						value;
						for (var key in search) {
							value = search[key];
							if (key === settings.param) {
								if (settings.debug) {
									index = parseInt(value, 10);
								}
							} else {
								params[key] = value;
							}
						}
					}
					if (settings.data) {
						for (var key in settings.data) {
							params[key] = settings.data[key];
						}
					}
					for (var key in params) {
						query += key + "=" + params[key] + "&";
					}
				}

				function url(i) {
					return !settings.ajax ? (query + settings.param + "=" + i) : "";
				}

				var
				pages = Math.min(settings.pages, totalPages),
				start = Math.max(1, Math.ceil(index - (pages / 2))),
				end = Math.min(totalPages, start + pages - 1),

				// adjust
				delta = pages - (end - start + 1),
				start = Math.max(1, start - delta),

				box = $('<div class="pagination"></div>'),
				component = "";

				$(target).html(box);

				for (var i = start; i <= end; ++i) {
					if (i === index) {
						component += '<span class="current">' + i + '</span> ';
					} else {
						component += '<a href="' + url(i) + '" rel="' + i + '">' + i + '</a> ';
					}
				}

				box.append(component);

				// first & previous
				if (index > 1) {
					var
					first = '<a href="' + url(1) + '" class="first" rel="' + 1 + '">' + settings.first + '</a> ',
					previous = index - 1,
					widget;

					previous = '<a href="' + url(previous) + '" class="previous" rel="' + previous + '">' + settings.previous + '</a> ';
					widget = previous;

					if (start > 1) {
						if (settings.ellipsis) {
							first = '<a href="' + url(1) + '" class="first" rel="' + 1 + '">' + 1 + '</a> ... ';
							widget = previous + first;
						} else {
							widget = first + previous;
						}
					}

					box.prepend(widget);
				}

				// last & next
				if (index < totalPages) {
					var
					last = '<a href="' + url(totalPages) + '" class="last" rel="' + totalPages + '">' + settings.last + '</a> ',
					next = index + 1;

					next = '<a href="' + url(next) + '" class="next" rel="' + next + '">' + settings.next + '</a> ';
					widget = next;

					if (end < totalPages) {
						if (settings.ellipsis) {
							last = '... <a href="' + url(totalPages) + '" class="last" rel="' + totalPages + '">' + totalPages + '</a> ';
							widget = last + next;
						} else {
							widget = next + last;
						}
					}

					box.append(widget);
				}

				// ajax
				if (settings.ajax) {
					box.find("a").click(function() {
						var index = parseInt($(this).attr("rel"), 10);

						// recursive
						init(index);
						// callback
						settings.callback(index);

						return false;
					});
				}
			}
		}

		init(settings.current);
	},

```

Coming Soon!
