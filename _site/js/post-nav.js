var emptyCircle = '&#9675;';
var filledCircle = '&#9679;';
var headerIds = [];
var headerSelector = 'article h1:not(.post-title)';

$(document).ready(function() {
    // add ids to figures
    $('article figure').each(function(index) {
        var i = index + 1;
        var id = 'figure' + i;

        $(this).attr('id', id);

        $(this).find('figcaption').prepend('<a href="#' + id + '">Figure ' + i + ':</a> ');
    });

    // add ids to headers
    $(headerSelector).each(function(index) {
        // replace spaces with dashes, and remove non-alphanumeric chars
        var id = '';
        id = $(this).html().replace(/\s/g, '-');
        id = id.replace(/[^(A-Z)(a-z)(0-9)-]/g,'');

        if($.inArray(id, headerIds) != -1) {
            id = id + index;
        }

        headerIds[index] = id;
        $(this).attr('id', id);

        $(this).append('<a class="id" href="#' + id + '">' + id + '</a>');
        $('nav.article').append('<a href="#' + id + '">' + emptyCircle + '</a> ')
    });

    $(window).scroll(function() {
        // populate section nav
        $(headerSelector).each(function(index) {
            $('nav.article a:nth-child(' + (index + 1) + ')').html(emptyCircle);
        });

        // fill in circles for headers that have been viewed
        $(headerSelector).each(function(index) {
            if ($(this).is(':in-viewport') || $(this).is(':above-the-top')) {
                $('nav.article a:nth-child(' + (index + 1) + ')').html(filledCircle);
            }
        });
    });
});



