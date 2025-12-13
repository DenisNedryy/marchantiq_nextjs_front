import { HOST } from "../host.js";

export async function getThreads() {
    try {
        const preRes = await fetch(`${HOST}/api/threads`, {
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

export async function getThreadsByNews(threads_uuid) {
    try {
        const preRes = await fetch(`${HOST}/api/threads/oneThread/${threads_uuid}`, {
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

export async function createThreads(newsUuid, data) {
    try {
        const preRes = await fetch(`${HOST}/api/threads/${newsUuid}`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include",
        });
        const res = await preRes.json();
        return res;
    } catch (err) {
        console.error(err);
    }
};

export async function createThreadImg(threads_uuid, data) {
    try {
        const preRes = await fetch(`${HOST}/api/threads/addImg/${threads_uuid}`, {
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

export async function updateThreads(threads_uuid, data) {
    console.log(threads_uuid);
    try {
        const preRes = await fetch(`${HOST}/api/threads/updateThread/${threads_uuid}`, {
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


export async function updateThreadImg(threadsImg_uuid,data) {
    try {
        const preRes = await fetch(`${HOST}/api/threads/updateThreadImg/${threadsImg_uuid}`, {
            method: "PUT",
            headers: {
            },
            credentials: "include",
            body: data,
        });
        const res = await preRes.json();
        return res;
    } catch (err) {
        console.error(err);
    }
};

export async function deleteThread(threads_uuid) {
    try {
        const preRes = await fetch(`${HOST}/api/threads/deleteThread/${threads_uuid}`, {
            method: "DELETE",
            headers: {
            },
            credentials: "include",
        });
        const res = await preRes.json();
        return res;
    } catch (err) {
        console.error(err);
    }
};

export async function deleteThreadImg(threadsImg_uuid) {
    try {
        const preRes = await fetch(`${HOST}/api/threads/deleteThreadImg/${threadsImg_uuid}`, { 
            method: "DELETE",
            headers: {
            },
            credentials: "include",
        });
        const res = await preRes.json(); 
        return res;
    } catch (err) {
        console.error(err);
    }
};