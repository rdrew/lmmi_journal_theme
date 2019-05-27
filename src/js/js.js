(function ($, Drupal) {

    Drupal.behaviors.footnote_popups = {
        attach: function attach(context, settings) {
            /*
                //target he footnotes list
            $.each($(".footnote-list ul.footnotes a"), function(index, value) {
                //find the footnotes at the bottom and extract the text
                var _footnoteText_ = $(this).siblings(".endnote-text").text();
                //var _bibCiteText_ = $(this).siblings(".endnote-text").text();
                console.log(_footnoteText_);
                //find the href of the related anchor from the id of this
                var _id_ = $(this).attr("id");
                console.log(_id_);
                //use the id to fing the links href and insert the text from the 1st var
                $('a[href$="' + _id_ + '"]').attr('data-toggle', 'tooltip').attr('data-original-title', _footnoteText_).attr('title', '');
            }); */



            $.each($(".footnote-list ul.footnotes a"), function(index, value) {
                //find the footnotes at the bottom and extract the text
                //var _footnoteText_ = $(this).siblings(".csl-bib-body").text();
                var _footnoteBibcite_ = $(this).siblings(".bibcite-citation").text();
                var _footnoteEndnote_ = $(this).siblings(".endnote-text").text();
                //find the href of the related anchor from the id of this
                var _id_ = $(this).attr("id");
                var _footnoteText_ = "test";
                var _footnoteText_ = _footnoteEndnote_;
                //console.log("start");
                //console.log(_id_);
                //console.log(_footnoteBibcite_);
                //console.log(_footnoteEndnote_);
                //console.log("end");
                //use the id to fing the links href and insert the text from the 1st var
                $('a[href$="' + _id_ + '"]').attr('data-toggle', 'tooltip').attr('data-original-title', _footnoteText_).attr('title', '');
            });




            //$.each($("li.footnote"), function(index, value) {
                ////find the footnotes at the bottom and extract the text
                //var _footnoteText_ = $(value).text();
                //console.log(_footnoteText_);
                ////find the href of the related anchor from the id of this
                //var _id_ = $('.footnote-link', this).attr("id");
                //console.log(_id_);
                ////use the id to fing the links href and insert the text from the 1st var
                //$('a[href$="' + _id_ + '"]').attr('data-toggle', 'tooltip').attr('data-original-title', _footnoteText_).attr('title', '');
            //});
        }
    };

    Drupal.behaviors.citationItalics = {
        attach: function attach(context, settings) {
            $.each($(".csl-entry"), function(index, value) {
                if ($('.citeproc-container-title', this).length ){
                    //console.log("yay");
                    $('.citeproc-title', this).addClass("no-italics");
                }
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
    Drupal.behaviors.stickyTOC = {
        attach: function attach(context, settings) {

       var container_height = $('.node__main-content').css("height");
            //console.log(height);
            //$('.toc-container .toc-sticky-wrapper').css('height', container_height);
        //$( ".toc-block--wide" ).wrap( "<div class='new' />");
        }
    };


    Drupal.behaviors.article_keyword_copier = {
        attach: function attach(context, settings) {

            $('.field--name-field-journal-article-keywords').appendTo("#toc-sections");
        }
    };
    Drupal.behaviors.slickSliderInit = {
        attach: function attach(context, settings) {

            $('.lp-slideshow').slick({
                fade: true,
                cssEase: 'linear',
                pauseOnHover: false,
                autoplay: true,
                autoplaySpeed: 5000
            });
        }
    };

    Drupal.behaviors.tocScroll = {
        attach: function attach(context, settings) {


            $('.toc a').on('click',function(e) {
                e.preventDefault();
                var offset = 100;
                var target = this.hash;
                if ($(this).data('offset') != undefined) offset = $(this).data('offset');
                $('html, body').stop().animate({
                    'scrollTop': $(target).offset().top - offset
                }, 500, 'swing', function() {
                    // window.location.hash = target;
                });
            });
        }
    };
    Drupal.behaviors.footnoteScroll = {
        attach: function attach(context, settings) {


            $('.see-footnote').on('click',function(e) {
                e.preventDefault();
                var offset = 100;
                var target = this.hash;
                if ($(this).data('offset') != undefined) offset = $(this).data('offset');
                $('html, body').stop().animate({
                    'scrollTop': $(target).offset().top - offset
                }, 500, 'swing', function() {
                    // window.location.hash = target;
                });
            });
        }
    };

    Drupal.behaviors.slideLink = {
        attach: function attach(context, settings) {
            $( ".slideshow-slide header" ).each(function( index ) {
                let url = $("a.slide_link", this).attr("href");
                $( this ).wrap('<a href="' + url + '"></a>');
            });

        }
    };







































})(jQuery, Drupal);
