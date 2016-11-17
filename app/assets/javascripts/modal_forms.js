/**
 * Created by scout on 3/25/15.
 * "методы" по работе с модальными окнами.
 *
 */

(function($) {

    $.fn.modal_success = function(){
        //console.log("modal_success>");

        // close modal
        this.modal('hide');

        // clear form input elements
        this.find('input[type="text"]').val('');
        this.find('textarea').val('');

        // clear error state
        this.clear_previous_errors();
    };

    $.fn.render_form_errors = function(errors){

        var $form = this;
        this.clear_previous_errors();
        var model = this.data('model');

        // show error messages in input form-group help-block
        $.each(errors, function(field, messages){

            var $input = $('input[name="' + model + '[' + field + ']"]');
            if ($input.length == 0) {
                $input = $('textarea[name="' + model + '[' + field + ']"]');
            }

            $input.closest('.form-group')
                .addClass('has-error')
                .find('.help-block')
                //.html( messages.join('  ') );
                .html( messages[0] );
        });

    };

    $.fn.clear_previous_errors = function(){
        $('.form-group.has-error', this).each(function(){
            //console.log($('.help-block', $(this)));
            $('.help-block', $(this)).html('');
            $(this).removeClass('has-error');
        });
        $.rails.enableFormElements($(this));
    };

    $.fn.my_render_form_errors = function(errors) {

        var model = this.data('model');

        $.each(errors, function(field, messages) {

            var $span = $('span#' + model + '_' + field);
            //console.log($span);
            $span.closest('.form-group').addClass('has-error');
            $span.html( messages.join(' & ') );

        });

    };

}(jQuery));

