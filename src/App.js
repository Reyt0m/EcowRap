const showMessage = () => {
    const textbox = document.getElementById("input-message");
    const inputValue = textbox.value;

    //テキストボックスの値を使って、出力するメッセージを生成する
    const output = "入力された内容は「" + inputValue + "」です。";
    //出力用のp要素にメッセージを表示
    document.getElementById("output-message").innerHTML = output;
    makeMessage()
    }

const makeMessage = () => {
    ARtext = document.getElementsByTagName("a-box").setAttribute("color",inputValue);
    console.log(ARtext)
}
// AFRAME.registerComponent('plane', {
//     init: function () {
//       this.canvas = document.getElementById('canvas');
//       this.ctx = canvas.getContext('2d');
//     },
//     tick: function () {
//       const material = this.el.getObject3D('mesh').material;
//       const fontSize = 24;

//       this.canvas.width = this.canvas.width;
//       this.canvas.height = this.canvas.height;

//       this.ctx.save();
//         this.ctx.font = `${fontSize}px sans-serif`;
//         this.ctx.fillText(Date.now(), 0, fontSize);
//       this.ctx.restore();

//       if (!material.map) {
//         return;
//       }

//       material.map.needsUpdate = true;
//     }
//   });

//   const plane = document.createElement('a-plane');

//   plane.setAttribute('plane', 'plane');
//   plane.setAttribute('material', 'shader: flat; src: #canvas;');

//   document.getElementsByTagName('a-scene')[0].appendChild(plane);