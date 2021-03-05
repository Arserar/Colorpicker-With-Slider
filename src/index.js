import './scss/index.scss';
import {preparedColors} from './js/prepareColors';

let timeout;
let state = true;
let background = Math.floor(Math.random() * 1001);
let color = Math.floor(Math.random() * 1001);

$( function() {
    function refreshSwatch(e, ui) {
        if (timeout) {
            clearTimeout(timeout);
            timeout = undefined;
        }
        timeout = setTimeout(function() {
            if (state) background = ui.value;
            else color = ui.value;
            const value = preparedColors[state ? background : color];
            const styleName = state ? 'background-color' : 'color';
            $( '#swatch' )
                .css( `${styleName}`, value);
            $( '.color_value' )
                .text(`${styleName}: ${value}`)
                .css( 'color', value );
        }, 100);
    }

    $( '#red' ).slider({
      orientation: 'horizontal',
      range: 'min',
      max: 1000,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch,
    });
    $( '#red' ).slider( 'value', state ? background : color);
    $( '#swatch' )
    .css( 'color', preparedColors[color]);

    $('input').focus(function() {
        state = !state;
        $( '#red' ).slider( 'value', state ? background : color);
    });
} );
