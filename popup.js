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
    var imgElements = document.querySelectorAll('img');
    imgElements.forEach(
        img => img.style.display = displayValue
    );
    console.log(displayValue);
}

document.getElementById("imgNone").addEventListener("click", executeScript('none'));
document.getElementById("imgBlock").addEventListener("click", executeScript('block'));
