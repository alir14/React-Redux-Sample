export const GetUsers = async (url) => {
  console.log("calling users");
  const response = await fetch(url);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export const ManageUser = async (url, apiType, value) => {
  const fetchOption = {
    method: apiType,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value),
  };

  const data = await await fetch(url, fetchOption).then((response) => {
    return response.json();
  });

  return data;
};
