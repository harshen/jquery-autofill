/*

 * Author - Harshen Amarnath Pandey
 * Version - 0.8.0
 * Release - 16th August 2013
 * Copyright (c) 2013 - 2016 Harshen Pandey
*/

 (function( $ ) {

    $.fn.autofill = function( options ) {
        $.fn.autofill.defaults.fieldId = this.attr('id') + "_copy";
        return this.each( function() {
            autofillboxes( $(this), options );
        });
    };

    function autofillboxes( $this , options ) {
            var opts = $.extend( {}, $.fn.autofill.defaults, options );
            var $this = $this;
            $this.blur( function() {
                
                if( options.fieldId == undefined && options.overrideFieldEverytime == undefined ) {
                    if( $( "#" + opts.fieldId ).val() == "" ) {
                        $( "#" + opts.fieldId ).val( $this.val() );
                        $this.unbind('blur');
                    }
                }

                else if( options.fieldId == undefined && options.overrideFieldEverytime == false ) {
                    if( $( "#" + opts.fieldId ).val() == "" ) {
                        $( "#" + opts.fieldId ).val( $this.val() );
                        $this.unbind('blur');
                    }
                }

                else if( options.fieldId == undefined && options.overrideFieldEverytime == true ) {
                        $( "#" + opts.fieldId ).val( $this.val() );
                }
                
                else if( options.fieldId != undefined && options.overrideFieldEverytime == undefined ) {
                    if( $( "#" + opts.fieldId ).val() == "" ) {
                        $( "#" + opts.fieldId ).val( $this.val() );
                        $this.unbind('blur');
                    }
                }

                else if( options.fieldId != undefined && options.overrideFieldEverytime == true ){
                    $( "#" + opts.fieldId ).val( $this.val() );
                }

                else if( options.fieldId != undefined && options.overrideFieldEverytime == false ){
                    if( $( "#" + opts.fieldId ).val() == "" ) {
                        $( "#" + opts.fieldId ).val( $this.val() );
                        $this.unbind('blur');
                    }
                }

            });
    };
    
    $.fn.autofill.defaults = {
        overrideFieldEverytime : false
    };

 }(jQuery));
