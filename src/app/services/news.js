import { HOST } from "../host";

export async function getNews() {
    try {
        const preRes = await fetch(`${HOST}/api/news`, {
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

export async function getNewsByCategory(category) {
    try {
        const preRes = await fetch(`${HOST}/api/news/byCategory/${category}`, {
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

export async function getOneNews(uuid) {
    try {
        const preRes = await fetch(`${HOST}/api/news/${uuid}`, {
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

export async function createNews(data) {
    try {
        const preRes = await fetch(`${HOST}/api/news`, {
            method: "POST",
            headers: {},
            credentials: "include",
            body: data
        });
        const res = await preRes.json();
        return res;
    } catch (err) {
        console.error(err);
    }
};

export async function updateNews(uuid, data) {
    try {
        const preRes = await fetch(`${HOST}/api/news/${uuid}`, {
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

export async function deleteNews(uuid) {
    try {
        const preRes = await fetch(`${HOST}/api/news/${uuid}`, {
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