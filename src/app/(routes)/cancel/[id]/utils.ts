export const getVisitInfo = async (id: string, token: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/public/cancel/${id}?token=${token}`
  );
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("Failed to get visit info");
  }
};

export const cancelVisit = async (id: string, token: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/public/visits/${id}?token=${token}`,
    {
      method: "DELETE",
    }
  );
  return response;
};
