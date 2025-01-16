// document 抓網站(整個html)
// 當網頁載入完畢後執行箭頭函式
$(document).ready(() => {
    // 點擊事件：點下任何一個 .slider 都會執行
    $(".slider").click(function () {
        // 刪除全部的 .slider 類別 active
        $(".slider").removeClass("active");
        // 添加點下去的 .slider 類別 active
        $(this).addClass("active");
    });
});