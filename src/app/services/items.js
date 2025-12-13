import { HOST } from "../host.js";

export async function getItems() {
    try {
        const preRes = await fetch(`${HOST}/api/items`, {
            method: "GET",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: "include",
        });
        const res = await preRes.json();
        return res;
    } catch (err) {
        console.error(err);
    }
};

export async function getOneItem(uuid) {
    try {
        const preRes = await fetch(`${HOST}/api/items/${uuid}`, {
            method: "GET",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: "include",
        });
        const res = await preRes.json();
        return res;
    } catch (err) {
        console.error(err);
    }
};

export async function getItemsByCategory(category) {
    try {
        const preRes = await fetch(`${HOST}/api/items/byCategory/${category}`, {
            method: "GET",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: "include",
        });
        const res = await preRes.json();
        return res;
    } catch (err) {
        console.error(err);
    }
};

export async function getItemsByResearch(query) {
    try {
        const preRes = await fetch(`${HOST}/api/items/bySearch/${query}`, {
            method: "GET",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: "include",
        });
        const res = await preRes.json();
        return res;
    } catch (err) {
        console.error(err);
    }
};




export async function createItem(data) {
    try {
        const preRes = await fetch(`${HOST}/api/items`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: "include",
            body: JSON.stringify(data),
        });
        const res = await preRes.json();
        return res;
    } catch (err) {
        console.error(err);
    }
};


export async function addImage(data, uuid) {
    try {
        const preRes = await fetch(`${HOST}/api/items/images/${uuid}`, {
            method: "POST",
            headers: {
            },
            credentials: "include",
            body: data
        });
        const res = await preRes.json();
        return res;
    } catch (err) {
        console.error(err);
    }
};

export async function updateItem(uuid, data) {
    try {
        const preRes = await fetch(`${HOST}/api/items/${uuid}`, {
            method: "PUT",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: "include",
            body: JSON.stringify(data),
        });
        const res = await preRes.json();
        return res;
    } catch (err) {
        console.error(err);
    }
};

export async function updateItemImage(imgUuid, data) {
    try {
        const preRes = await fetch(`${HOST}/api/items/images/${imgUuid}`, {
            method: "PUT",
            headers: {
            },
            credentials: "include",
            body: data
        });
        const res = await preRes.json();
        return res;
    } catch (err) {
        console.error(err);
    }
};

export async function deleteItem(uuid) {
    try {
        const preRes = await fetch(`${HOST}/api/items/${uuid}`, {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: "include",
        });
        const res = await preRes.json();
        return res;
    } catch (err) {
        console.error(err);
    }
};

export async function deleteItemImg(imgUuid) {
    try {
        const preRes = await fetch(`${HOST}/api/items/images/${imgUuid}`, {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: "include",
        });
        const res = await preRes.json();
        return res;
    } catch (err) {
        console.error(err);
    }
};