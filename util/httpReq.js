export default async function httpRequest(url, type, data) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  // if (localStorage.getItem('token')) header.Authorization = localStorage.getItem('token');
  switch (type) {
    case "POST":
      return (
        fetch(`https://housing.club.mk/${url}`, {
          method: "POST",
          headers,
          body: JSON.stringify({
            ...data,
          }),
        })
          .then((res) => {
            return { status: res.status, data: res.json() };
          })
          // .then((ress) => console.log(ress, "post Response"))
          .catch((err) => console.log(err))
      );
      break;
    case "PATCH":
      return fetch(`https://housing.club.mk/${url}`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({
          ...data,
        }),
      })
        .then((res) => res.json())
        .then((ress) => console.log(ress, "patch Response"))
        .catch((err) => console.log(err));
      break;
    case "DELETE":
      return fetch(`https://housing.club.mk/${url}`, {
        method: "DELETE",
        headers,
        body: JSON.stringify({
          ...data,
        }),
      })
        .then((res) => res.json())
        .then((ress) => console.log(ress, "delete Response"))
        .catch((err) => console.log(err));
      break;

    default:
      return fetch(`https://housing.club.mk/${url}`)
        .then((res) => res.json())
        .then((ress) => console.log(ress, "get Response"))
        .catch((err) => console.log(err));
      break;
  }
}
