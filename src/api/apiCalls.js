export const createUser = async (name, age) => {
  let options = {
    method: "POST",
    headers: {
      "User-Agent": "React Front-End",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, age: age }),
  };

  return fetch(`${process.env.REACT_APP_BACKEND_URL}/users/create`, options)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const EnrollUser = async (month, slot, userId,paymentId) => {
  let options = {
    method: "POST",
    headers: {
      "User-Agent": "React Front-End",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ month, slot, userId,paymentId }),
  };

  return fetch(`${process.env.REACT_APP_BACKEND_URL}/enroll/new`, options)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
