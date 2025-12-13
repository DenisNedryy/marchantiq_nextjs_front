import { HOST } from "../host.js";

export async function sendMail(data) {
    console.log("service__mail");
    try {
        const preRes = await fetch(`${HOST}/api/mails`, { 
            method: "POST",
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