import { HOST } from "../host.js";

export async function disconnect() {
    try {
        const preRes = await fetch(`${HOST}/api/auth/disconnect`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: "include",
        });
        const res = await preRes.json();
        return {
            status: preRes.status,
            ok: preRes.ok,
            data: res
        };
    } catch (err) {
        console.error(err);
    }
}

export async function signOut(data) {
    try {
        const preRes = await fetch(`${HOST}/api/auth/signUp`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password,
                magicWord: data.magicWord
            }),
        });
        const res = await preRes.json();
        return {
            status: preRes.status,
            ok: preRes.ok,
            data: res
        };
    } catch (err) {
        console.error(err);
    }
}

export async function signIn(data) {
    try {
        const preRes = await fetch(`${HOST}/api/auth/signIn`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
        });
        const res = await preRes.json();
        return {
            status: preRes.status,
            ok: preRes.ok,
            data: res
        };
    } catch (err) {
        console.error(err);
    }
}

export async function isUserConnected() {
    try {
        const preRes = await fetch(`${HOST}/api/auth/isUserConnected`, {
            method: "GET",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
        });
        const res = await preRes.json();
        return {
            status: preRes.status,
            ok: preRes.ok,
            data: res
        };
    } catch (err) {
        console.error(err);
    }
}
