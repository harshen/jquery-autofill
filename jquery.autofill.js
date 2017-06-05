/*

 * Author - Harshen Pandey
 * Version - 1.6.0
 * Release - 5th June 2017
 * Copyright (c) 2017 - 2020 Harshen Pandey
*/

 (function( $ ) {

    $.fn.autofill = function( options ) {
        //Giving default value for fieldId option.
        $.fn.autofill.defaults.fieldId = this.attr('id') + "_copy";
        return this.each( function() {
            autofillboxes( $(this), options );
        });
    };
    
    //Definition of private function autofillboxes.
    function autofillboxes( $this , options ) {
            var opts = $.extend( {}, $.fn.autofill.defaults, options );
            var $this = $this;
            $this.blur( function() {
                
                if(( options.fieldId == undefined && options.overrideFieldEverytime == undefined ) || ( options.fieldId == undefined && options.overrideFieldEverytime == false ) || ( options.fieldId != undefined && options.overrideFieldEverytime == undefined ) || ( options.fieldId != undefined && options.overrideFieldEverytime == false )) {
                    if( $( "#" + opts.fieldId ).val() == "" ) {
                        $( "#" + opts.fieldId ).val( $this.val() );
                        $this.unbind('blur');
                    }
                }

                else if(( options.fieldId == undefined && options.overrideFieldEverytime == true ) || ( options.fieldId != undefined && options.overrideFieldEverytime == true )) {
                        $( "#" + opts.fieldId ).val( $this.val() );
                }

            });
    };
    
    //Giving default value for overrideFieldEverytime option. 
    $.fn.autofill.defaults = {
        overrideFieldEverytime : false
    };

 }(jQuery));
