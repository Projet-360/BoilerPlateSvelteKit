export async function apiCall({
  url,
  method = "GET",
  headers = null, // Défini à null par défaut
  body = null,
  credentials = null,
  handleSuccess = null,
  handleError = null,
}) {
  try {
    // Initialise les options de la requête
    const options = {
      method,
    };

    // Ajoute les en-têtes seulement s'ils sont fournis
    if (headers) {
      options.headers = headers;
    }

    // Ajoute le corps seulement s'il est fourni
    if (body) {
      options.body = JSON.stringify(body);
      if (!headers || !headers["Content-Type"]) {
        options.headers = {
          ...(options.headers || {}),
          "Content-Type": "application/json",
        };
      }
    }

    // Ajoute l'option credentials seulement si elle est fournie
    if (credentials) {
      options.credentials = credentials;
    }

    // Effectue la requête
    const response = await fetch(url, options);

    // Traite la réponse
    if (response.ok) {
      const data = await response.json();
      if (handleSuccess) {
        handleSuccess(data);
      }
      return data;
    } else {
      const errorData = await response.json();
      if (handleError) {
        handleError(errorData);
      }
      throw new Error(errorData.message || "Erreur du serveur");
    }
  } catch (error) {
    //console.error("Erreur API:", error);
    if (handleError) {
      handleError(error);
    }
    throw error;
  }
}
