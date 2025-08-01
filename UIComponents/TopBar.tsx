export const Topbar = () => {
  const logOut = () => {
    chrome.storage.local.remove('oauthtoken');
    window.location.reload();
  }

  return <div className="topBar">
    <img className="border-0 overflow-hidden rounded-sm"  width={30} height={30} src="/icon.png" alt="dropdown image" />
    <button onClick={logOut}>Log Out</button>
  </div>;
}