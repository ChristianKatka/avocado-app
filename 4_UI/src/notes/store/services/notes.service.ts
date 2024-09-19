import { authFetch } from "../../../auth/services/auth-http";

const API_BASE_URL = "https://pk247c2li9.execute-api.eu-west-1.amazonaws.com";

export const getNotesService = async () => {
  return await authFetch.get(`${API_BASE_URL}/note`);
};

export const createNoteService = async (noteDraft: any) => {
  return await authFetch.post(`${API_BASE_URL}/note`, noteDraft);
};

export const deleteNoteService = async (noteId: any) => {
  return await authFetch.delete(`${API_BASE_URL}/note/${noteId}`);
};
