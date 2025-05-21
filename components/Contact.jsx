// A FAIRE
//
// Ajouter une regex pour valider le format de l'email

import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xanoznja");

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

      {state.succeeded ? (
        <div className="bg-green-600 text-white p-6 rounded-xl text-center shadow-xl animate-fade-in">
          <h3 className="text-2xl font-bold mb-2">
            Merci pour votre message !
          </h3>
          <p>Je vous répondrai dès que possible.</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
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
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Votre nom"
            />
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
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="votre@email.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 mt-1 text-sm"
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
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Votre message..."
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500 mt-1 text-sm"
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
