jQuery(function ($) {

    scrollTo = function (id) {
        $('html,body').animate({ scrollTop: $("#" + id).offset().top }, 'slow');
    }

    //resize the chosen on window resize
    // $(window)
    //     .off('resize.chosen')
    //     .on('resize.chosen', function () {
    //         $('.chosen-select').each(function () {
    //             var $this = $(this);
    //             $this.next().css({ 'width': $this.parent().width() });
    //         })
    //     }).trigger('resize.chosen');

    // // Chosen Select plunging
    // if (!ace.vars['touch']) {
    //     $('.chosen-select').chosen({ allow_single_deselect: true });

    //     //resize the chosen on window resize
    //     $(window)
    //         .off('resize.chosen')
    //         .on('resize.chosen', function () {
    //             $('.chosen-select').each(function () {
    //                 var $this = $(this);
    //                 $this.next().css({ 'width': $this.parent().width() });
    //             })
    //         }).trigger('resize.chosen');

    //     //resize chosen on sidebar collapse/expand
    //     $(document).on('settings.ace.chosen', function (e, event_name, event_val) {
    //         if (event_name !== 'sidebar_collapsed') return;
    //         $('.chosen-select').each(function () {
    //             var $this = $(this);
    //             $this.next().css({ 'width': $this.parent().width() });
    //         });
    //     });
    // }

    $(window).bind("resize", function () {
        //console.log($(this).width())
        if ($(this).width() < 766) {
            $('.auto-width-m').removeClass('col-sm-12').addClass('auto-width-m1');
        } else {
            $('.auto-width-m').addClass('col-sm-12');
        }
    }).trigger('resize');


    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        // https://datatables.net/reference/api/columns.adjust() states that this function is trigger on window resize
        $($.fn.dataTable.tables(true)).DataTable().columns.adjust();
    });

    $(window).on('shown.bs.modal', function () {
        $($.fn.dataTable.tables(true)).DataTable().columns.adjust();
    });

    $('.widget-box').on('fullscreen.ace.widget', function (e) {
        $($.fn.dataTable.tables()).DataTable().columns.adjust();
    });

    $('.widget-box').on('fullscreened.ace.widget', function (e) {
        $($.fn.dataTable.tables()).DataTable().columns.adjust();
    });

});