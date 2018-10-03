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








































})(jQuery, Drupal);
