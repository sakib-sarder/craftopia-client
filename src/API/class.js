// update classes status

export const updateClass = async (id, status) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/classes/status/${id}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    }
  );
  const data = await response.json();
  return data;
};
// send feedback
export const sendFeedback = async (id, feedback) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/classes/status/${id}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ feedback }),
    }
  );
  const data = await response.json();
  return data;
};

