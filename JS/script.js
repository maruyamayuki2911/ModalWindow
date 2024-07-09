window.addEventListener("load", function () { //画面が読み込まれてから以降の処理を行う

    let contentImg = document.getElementsByClassName('content-img'); //画像の要素を取得
    let contentImgAry = Array.prototype.slice.call(contentImg); //contentImgを配列に変換
    let modal = document.getElementById('modal');   //モーダル要素を取得
    let modalImg = document.getElementById('modal-img');  //モーダル要素imgを取得
    let closeBtn = document.getElementById('close-btn');  //クローズボタン要素を取得

    contentImgAry.forEach(function(target){ //繰り返し処理で”contentImgAry”の要素（img）を”target”に格納
        target.addEventListener('click',function(){  //クリックされた要素に対してイベント処理
            modal.setAttribute('id','modal-open'); //モーダル要素にidを付与（フェードイン）
            let src = target.getAttribute("src");  //クリックされた要素からsrc属性を取得
            modalImg.setAttribute('src',src);  //空のモーダルウインドウに取得した画像をセット
        });
    });

    closeBtn.addEventListener('click',function(){  //✕ボタンクリックされたらイベント処理
        modal.setAttribute('id','modal');   ////モーダル要素にidを付与（フェードアウト）
    });
});

