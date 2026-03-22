export const getStoreApps  = () => {
    const data = localStorage.getItem("installedApps");
    return data ? JSON.parse(data) : [];
}

export const saveApp = (app) => {
    const storedApps = getStoreApps();
    
    const exixts = storedApps.find((a) => a.id === app.id);

    if(exixts) {
        alert("App already installed");
        storedApps.push(app);
        localStorage.setItem("installedApps", JSON.stringify(storedApps));
    }
}

export const removeFromStore = (id) => {
    const storeApps = getStoreApps().filter((app )=> app.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(storeApps));

}