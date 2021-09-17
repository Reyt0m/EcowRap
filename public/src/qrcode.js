

const qrDiv = document.querySelectorAll( '[data-url]' );
new QRCode( qrDiv, {
    text: qrDiv.getAttribute( 'data-url' ),
    width: 350,
    height: 350,
    colorDark : "#000000",
    colorLight : "#ffffff",
} );

const qrDiv = document.querySelectorAll( '[data-url]' );
new QRCode( qrDiv, {
    text: qrDiv.getAttribute( 'data-url' ),
    width: 350,
    height: 350,
    colorDark : "#000000",
    colorLight : "#ffffff",
} );