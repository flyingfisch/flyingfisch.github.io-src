var emptyCircle = '&#9675;';
var filledCircle = '&#9679;';
var headerIds = [];
var headerSelector = 'article h1:not(.post-title)';

var debounceSettings = {
	delay: 250,
	immediate: false
};

// Source: https://davidwalsh.name/javascript-debounce-function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


$(document).ready(function() {
    var headerElements = $(headerSelector);
    var articleNavElement = $('nav.article');
    
    // add ids to figures
    $('article figure').each(function(index) {
        var i = index + 1;
        var id = 'figure' + i;

        $(this).attr('id', id);

        $(this).find('figcaption').prepend('<a href="#' + id + '">Figure ' + i + ':</a> ');
    });

    // add ids to headers
    headerElements.each(function(index) {
        // replace spaces with dashes, and remove non-alphanumeric chars
        var headerText = $(this).text();
        var id = headerText.replace(/\s/g, '-');
        id = id.replace(/[^(A-Z)(a-z)(0-9)-]/g,'');
        
        var headerElement = $(this);

        if($.inArray(id, headerIds) != -1) {
            id = id + index;
        }

        headerIds[index] = id;
        headerElement.attr('id', id);

        headerElement.append('<a class="id" href="#' + id + '">' + id + '</a>');
        articleNavElement.append('<a href="#' + id + '" title="' + headerText + '">' + emptyCircle + '</a> ')
    });
    

    $(window).scroll(debounce(function() {
        headerElements.each(function(index) {
            var headerElement = $(this);
            var sectionNavElement = $('nav.article a:nth-child(' + (index + 1) + ')');

            // fill in circles for headers that have been viewed
            if (headerElement.is(':in-viewport') || headerElement.is(':above-the-top')) {
                sectionNavElement.html(filledCircle);
            } else {
                sectionNavElement.html(emptyCircle);
            }
        });
    }, debounceSettings.delay, debounceSettings.immediate));
});



