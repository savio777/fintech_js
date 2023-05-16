import api from "..";

interface BodyData {
  through_transfer: string; // "PIX" | "TED" | "DOCS"
  id_account_sender: string;
  id_account_recipient: string;
  value: number;
}

export default async function SendTransferRequest(
  data: BodyData
): Promise<object> {
  const response = await api.post("/transfers", data);
  return response.data;
}
