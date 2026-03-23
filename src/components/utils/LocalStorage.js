 
export const getStoreApps = () => {
  const data = localStorage.getItem("apps");
  return data ? JSON.parse(data) : [];
};

 
export const saveApp = (app) => {
  const storedApps = getStoreApps();

  const exists = storedApps.find((a) => a.id === app.id);

  if (exists) return;  

  const updated = [...storedApps, app];
  localStorage.setItem("apps", JSON.stringify(updated));

 
  window.dispatchEvent(new Event("storageUpdated"));
};

 
export const removeFromStore = (id) => {
  const updated = getStoreApps().filter((app) => app.id !== id);
  localStorage.setItem("apps", JSON.stringify(updated));  

    window.dispatchEvent(new Event("storageUpdated"));
};