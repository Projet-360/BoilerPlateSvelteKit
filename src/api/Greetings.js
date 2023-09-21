import { BD } from "$lib/constants";
import { apiCall } from "$api/utils/apiCall";

export async function sendGreeting(name, message, editingId) {
  const url = editingId
    ? `${BD}/api/updateGreeting/${editingId}`
    : `${BD}/api/saveGreeting`;
  const method = editingId ? "PUT" : "POST";

  const isSuccessful = await apiCall({
    url,
    method,
    body: { name, message },
  });

  return isSuccessful !== null;
}

export async function getAllGreetings() {
  const data = await apiCall({
    url: `${BD}/api/getGreetings`,
    method: "GET",
  });

  return data;
}

export async function deleteGreeting(id) {
  const isSuccessful = await apiCall({
    url: `${BD}/api/deleteGreeting/${id}`,
    method: "DELETE",
  });

  return isSuccessful !== null;
}
