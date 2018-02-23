var emptyCircle = '&#9675;';
var filledCircle = '&#9679;';
var headerIds = [];
var headerSelector = 'article h1:not(.post-title)';

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
        var id = '';
        id = $(this).html().replace(/\s/g, '-');
        id = id.replace(/[^(A-Z)(a-z)(0-9)-]/g,'');
        
        var headerElement = $(this);

        if($.inArray(id, headerIds) != -1) {
            id = id + index;
        }

        headerIds[index] = id;
        headerElement.attr('id', id);

        headerElement.append('<a class="id" href="#' + id + '">' + id + '</a>');
        articleNavElement.append('<a href="#' + id + '">' + emptyCircle + '</a> ')
    });
    
    // poor man's debouncer
    var scrollHandler = {
        allow: true,
        reAllow: function () {
            scrollHandler.allow = true;
        },
        delay: 50
    };

    $(window).scroll(function() {
        if (scrollHandler.allow) {
            headerElements.each(function(index) {
                var headerElement = $(this);
                var sectionNavElement = $('nav.article a:nth-child(' + (index + 1) + ')');

                // fill in circles for headers that have been viewed
                if ($(this).is(':in-viewport') || $(this).is(':above-the-top')) {
                    sectionNavElement.html(filledCircle);
                } else {
                    sectionNavElement.html(emptyCircle);
                }
            });
            
            scrollHandler.allow = false;
            setTimeout(scrollHandler.reAllow, scrollHandler.delay);
        }
    });
});



