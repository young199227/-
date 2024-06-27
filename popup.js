function executeScript(displayValue) {
    return async () => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: imgChange,
            args: [displayValue],
        });
    };
}

function imgChange(displayValue) {
    // 隱藏 <img> 標籤中的圖片
    var imgElements = document.querySelectorAll('img');
    imgElements.forEach(
        img => img.style.display = displayValue
    );

    // 隱藏包含 background-image 的 <div> 標籤
    var divElements = document.querySelectorAll('div[data-thumbnail]');
    divElements.forEach(
        div => div.style.display = displayValue
    );

    console.log(displayValue);
}

document.getElementById("imgNone").addEventListener("click", executeScript('none'));
document.getElementById("imgBlock").addEventListener("click", executeScript('block'));
