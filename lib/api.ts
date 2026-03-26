const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface AddIdeaPayload {
  name: string;
  email: string;
  idea: string;
}

export interface ApiResponse {
  message: string;
}

export async function addIdea(data: AddIdeaPayload): Promise<ApiResponse> {
  const res = await fetch(`${API_URL}/addIdea`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json?.message || "Failed to submit idea");
  }

  return json;
}
