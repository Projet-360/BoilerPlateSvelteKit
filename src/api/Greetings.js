// greetingFunctions.js

export async function sendGreeting(name, message, editingId) {
  const url = editingId
    ? `http://localhost:3001/api/updateGreeting/${editingId}`
    : "http://localhost:3001/api/saveGreeting";
  const method = editingId ? "PUT" : "POST";

  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, message }),
  });

  return response.ok;
}

export async function getAllGreetings() {
  const response = await fetch("http://localhost:3001/api/getGreetings");
  if (response.ok) {
    return await response.json();
  }
  return null;
}

export async function deleteGreeting(id) {
  const response = await fetch(
    `http://localhost:3001/api/deleteGreeting/${id}`,
    {
      method: "DELETE",
    },
  );
  return response.ok;
}
