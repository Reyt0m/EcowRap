const showMessage = () => {
    const textbox = document.getElementById("input-message");
    const inputValue = textbox.value;

    //テキストボックスの値を使って、出力するメッセージを生成する
    const output = "入力された内容は「" + inputValue + "」です。";
    //出力用のp要素にメッセージを表示
    document.getElementById("output-message").innerHTML = output;
    }

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