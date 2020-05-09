export const GetUsers = async (url) => {
  console.log("calling users");
  const response = await fetch(url);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export function ManageUser(url, apiType, value) {
  console.log("saveUser");

  const fetchOption = {
    method: apiType,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value),
  };
  let result;
  fetch(url, fetchOption).then((response) => (result = response.json()));

  return result;
}
