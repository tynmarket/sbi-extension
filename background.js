const script = `
document.querySelector('input[name=user_id]').value = 'ユーザーネーム';
document.querySelector('input[name=user_password]').value = 'パスワード';
document.querySelector('input[name=ACT_login]').click();
`;


chrome.browserAction.onClicked.addListener(function(activeTab){
  console.log("clicked")
  const newURL = 'https://site2.sbisec.co.jp/ETGate/';
  chrome.tabs.create({ url: newURL }, (tab) => {
    chrome.tabs.executeScript(
      tab.id,
      { code: script });
  });
});
