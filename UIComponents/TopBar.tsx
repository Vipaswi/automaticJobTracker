export const Topbar = () => {
  const logOut = () => {
    chrome.storage.local.remove('oauthtoken');
    window.location.reload();
  }

  return <div className="min-w-container flex justify-between items-center bg-white mt-2 ml-1 mr-1">
    <img src="../public/icon.png" alt="icon image" />
    <button onClick={logOut}>Log Out</button>
  </div>;
}