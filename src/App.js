const showMessage = () => {
    const textbox = document.getElementById("input-message");
    const inputValue = textbox.value;

    //テキストボックスの値を使って、出力するメッセージを生成する
    const output = "入力された内容は「" + inputValue + "」です。";
    //出力用のp要素にメッセージを表示
    document.getElementById("output-message").innerHTML = output;
    }

const makeMessage = () => {
    document.getElementsByTagName("a-text").value = inputValue;
    
}