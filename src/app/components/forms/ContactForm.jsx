"use client";

import { useState } from "react";
import { PhoneNumberField } from "../forms/PhoneNumberField";
import { sendMail } from "../../services/mails";

export function ContactForm({ uuid }) {
  const [objectValue, setObjectValue] = useState("Marchantiq - Demande de renseignement");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setObjectValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);

    // mapper les champs comme le backend attend
    formData.set("subject", formData.get("objet_message") || objectValue);
    formData.set("phone", phone);
    formData.set("items_uuid", uuid);

    setLoading(true);
    try {
      const res = await sendMail(formData);
      console.log("Mail envoyé:", res);

      form.reset();
      setPhone("");
      setObjectValue("Marchantiq - Demande de renseignement");
    } catch (err) {
      console.error("Erreur envoi mail:", err);
    } finally {
      setLoading(false);
         alert('Votre message a bien été envoyé');
    }
  }

  return (
    <div className="contactForm">
      <form onSubmit={handleSubmit}>
        <div className="form__direction__container">
          <div className="form__left">
            <div>
              <label>Nom:</label>
              <input type="text" name="name" required />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" required />
            </div>
            <div>
              <label>image:</label>
              <input type="file" name="img_url" accept="image/*" />
            </div>
          </div>

          <div className="form__right">
            <div>
              <label>Prénom:</label>
              <input type="text" name="prenom" required />
            </div>
            <div>
              <PhoneNumberField setPhone={setPhone} />
            </div>
          </div>
        </div>

        <div className="contactForm__rest">
          <div>
            <label>Objet du message:</label>
            <input
              type="text"
              name="objet_message"
              value={objectValue}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Message</label>
            <textarea name="message" required />
          </div>
        </div>

        <div className="btnContainer">
          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Envoi..." : "Envoyer"}
          </button>
        </div>
      </form>
    </div>
  );
}
