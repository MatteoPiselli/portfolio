import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

export default function Contact() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM_ID);

  // ----------- REGEX ------------ //

  // Ajouter une regex pour valider le format du nom
  // ^[a-zA-ZÀ-ÿ\s-]+$ : Le nom doit contenir uniquement des lettres (y compris les caractères accentués), des espaces et des tirets.
  // \s : Un espace est autorisé entre les mots.
  const nameRegex = /^[a-zA-ZÀ-ÿ\s-]+$/;

  // Ajouter une regex pour valider le format de l'email
  // ^[a-zA-Z0-9._%+-]+ : La partie (avant le @) doit contenir des lettres, des chiffres, des points, ou des tirets.
  // @ : Le caractère @ est obligatoire.
  // [a-zA-Z0-9.-]+ : Le nom de domaine (après le @) doit contenir des lettres, des chiffres, des points ou des tirets.
  // \. : Un point littéral est requis pour séparer le domaine de l'extension.
  // \.[a-zA-Z]{2,}$ : La partie après le @ doit contenir un point suivi de 2 lettres ou plus (ex: .com, .fr).
  const emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Ajouter une regex pour valider le format du message
  // ^[\s\S]{1,500}$ : N'importe quel caractère (y compris les espaces et les nouvelles lignes) et doit contenir entre 1 et 500 caractères.
  const messageRegex = /^[\s\S]{1,500}$/;

  // ----------- States pour les champs et erreurs ------------ //
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ----------- Fonction qui valide chaque champ du formulaire selon son nom et sa valeur ------------ //
  const validateField = (field, value) => {
    switch (field) {
      case "name":
        return nameRegex.test(value)
          ? ""
          : "Le nom doit contenir uniquement des lettres, des espaces et des tirets.";
      case "email":
        return emailRegex.test(value) ? "" : "Email invalide.";
      case "message":
        return messageRegex.test(value)
          ? ""
          : "Message requis (max 500 caractères)";
      default:
        return "";
    }
  };

  // ----------- Gestion de la soumission du formulaire ------------ //
  // Fonction appelée à chaque modification d'un champ du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Met à jour la valeur du champ dans le state
    setForm({ ...form, [name]: value });
    // Met à jour l'erreur éventuelle pour ce champ
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  // Fonction appelée lors de la soumission du formulaire
  const onSubmit = (e) => {
    e.preventDefault();
    // Valide tous les champs et stocke les erreurs éventuelles
    const newErrors = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      message: validateField("message", form.message),
    };
    setErrors(newErrors);
    // Si aucune erreur, soumet le formulaire via Formspree
    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      handleSubmit(e);
    }
  };

  // ----------- Affichage du formulaire ------------ //
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-20 bg-gradient-to-t from-black via-black to-[#232526] text-white flex flex-col items-center px-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        On travaille ensemble ?
      </h2>
      <p className="text-lg text-center mb-10 max-w-xl">
        N'hésitez pas à m'écrire via ce formulaire pour discuter de votre
        projet.
      </p>

      {/* ------------ Affichage du message de succès ou du formulaire ------------- */}
      {state.succeeded ? (
        <div className="bg-green-600 text-white p-6 rounded-xl text-center shadow-xl animate-fade-in">
          <h3 className="text-2xl font-bold mb-2">
            Merci pour votre message !
          </h3>
          <p>Je vous répondrai dès que possible.</p>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          className="w-full max-w-xl space-y-6 animate-fade-in"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Votre nom"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="votre@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Votre message..."
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className={`w-full bg-white text-black font-semibold py-3 px-6 rounded-xl transition ${
              state.submitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            {state.submitting ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      )}
    </section>
  );
}
