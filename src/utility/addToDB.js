const getstoredApp = () => {
    const storedApp = localStorage.getItem("installList");
    if(storedApp){
        const storedAppData = JSON.parse(storedApp);
        return storedAppData;
    }
    else{
        return [];
    }

}

const addToStoreDB =(id) => {
    const storedAppData = getstoredApp();

    if(storedAppData.includes(id)){
        alert("Already Ace");
    }
    else{
        storedAppData.push(id);
        const data= JSON.stringify(storedAppData);
        localStorage.setItem("installList", data)
    }

}



const removeFromDB = id => {
    const storedApp = localStorage.getItem('installList');

    if (storedApp) {
        let installedApp = JSON.parse(storedApp);
        
        const idToRemove = id.toString();

        const remainingApps = installedApp.filter(storedId => storedId !== idToRemove); 

        if (remainingApps.length !== installedApp.length) {
            localStorage.setItem('installList', JSON.stringify(remainingApps));
            console.log(`Successfully removed App ID: ${idToRemove} from localStorage.`);
        } else {
            console.log(`App ID ${idToRemove} not found in localStorage.`);
        }
    }
};


export {addToStoreDB, getstoredApp, removeFromDB};