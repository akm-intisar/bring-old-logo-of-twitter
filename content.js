const logoUrl = chrome.runtime.getURL("twitter-logo.svg");

const replaceLogo = () => {
  const logo = document.querySelector("[aria-label='Twitter']");
  if (logo) {
    logo.setAttribute("href", logoUrl);
    logo.setAttribute("data-testid", "AppTabBar_Logo_Link");
    logo.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" data-testid="AppTabBar_Logo"><g><path fill="#1d9bf0" d="M23.25 4.665a9.34 9.34 0 0 1-2.68.735A4.652 4.652 0 0 0 22.41 3.1a9.284 9.284 0 0 1-2.945 1.124A4.661 4.661 0 0 0 15.938 0c-2.559 0-4.634 2.075-4.634 4.634 0 .365.042.72.116 1.064C8.292 4.492 4.383 3.017 1.783.616a4.697 4.697 0 0 0-.63 2.355c0 1.616.816 3.039 2.058 3.876a4.63 4.63 0 0 1-2.103-.581v.06c0 2.253 1.605 4.131 3.736 4.553a4.644 4.644 0 0 1-2.096.08c.588 1.813 2.28 3.136 4.288 3.174a9.308 9.308 0 0 1-6.853 1.937c-.443 0-.883-.027-1.317-.082 2.445 1.582 5.343 2.508 8.473 2.508 10.167 0 15.73-8.426 15.73-15.73 0-.24-.006-.48-.017-.716a11.257 11.257 0 0 0 2.778-2.884z"></path></g></svg>`;
  }
};

replaceLogo();
setInterval(replaceLogo, 0);
