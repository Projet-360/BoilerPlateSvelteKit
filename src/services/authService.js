export async function signup(username, password) {
  try {
    const res = await fetch('http://localhost:3001/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Something went wrong');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Il y a eu un problème avec l\'opération fetch:', error);
    throw error;  // Vous pouvez choisir de relancer l'erreur pour la gérer plus haut dans l'arborescence de composants
  }
}

  
  export async function login(username, password) {
    const res = await fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    const data = await res.json();
    return data;
  }
  