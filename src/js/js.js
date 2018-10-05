(function ($, Drupal) {

    Drupal.behaviors.footnote_popups = {
        attach: function attach(context, settings) {
            $.each($("li[id^='footnote']"), function(index, value) {
                var _footnoteText_ = $(value).text();
                var _id_ = $(this).attr("id");
                $('a[href$="' + _id_ + '"]').attr('data-toggle', 'tooltip').attr('data-original-title', _footnoteText_).attr('title', '');
            });
        }
    };

    Drupal.behaviors.author_tasks_menu = {
        attach: function attach(context, settings) {
            $.each($(".menu__author-tasks .menu-item a "), function(index, value) {
                var titleText = $(this).attr("title");
                var linkInfo = '<span class="link-info">' +titleText+ '</span>';
                console.log(titleText);
                $(this).append(linkInfo);
            });
        }
    };







































})(jQuery, Drupal);
