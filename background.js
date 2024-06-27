chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.active) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            function: imgChange,
            args: ['none'],  // 設置為 'none' 來隱藏圖片
        });
    }
});

function imgChange(displayValue) {
    // 隱藏 <img> 標籤中的圖片
    var imgElements = document.querySelectorAll('img');
    imgElements.forEach(
        img => img.style.display = displayValue
    );

    // 隱藏包含 background-image 的 <div> 標籤
    var divElements = document.querySelectorAll('div[data-thumbnail],div.b-list__img,c-section__side');
    divElements.forEach(
        div => div.style.display = displayValue
    );

    console.log(displayValue);
}