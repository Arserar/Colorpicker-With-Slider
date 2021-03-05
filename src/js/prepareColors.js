function hexFromRGB(r, g, b) {
    const hex = [
      r.toString( 16 ),
      g.toString( 16 ),
      b.toString( 16 ),
    ];
    $.each( hex, function( nr, val ) {
      if ( val.length === 1 ) {
        hex[nr] = '0' + val;
      }
    });
    return hex.join( '' ).toUpperCase();
}

function randomRGB() {
    return Math.floor(Math.random() * 256);
}

const preparedColors = [];

for (let i = 0; i < 1001; i++) {
    const r = randomRGB();
    const g = randomRGB();
    const b = randomRGB();

    preparedColors.push('#' + hexFromRGB(r, g, b));
}

export {preparedColors};
