/* 画像クリックイベント*/
document.getElementById("imgId").addEventListener("click", function() {
    /*ポップアップ画像のdiv要素を作成*/
    var popup = document.createElement("div");
    popup.innerHTML = "<img src='画像のURL' onclick='removePopup()'>";
    popup.setAttribute("id", "popup");
    document.body.appendChild(popup);
});

/* ポップアップ画像を削除する関数*/
function removePopup() {
    var popup = document.getElementById("popup");
    popup.parentNode.removeChild(popup);
}