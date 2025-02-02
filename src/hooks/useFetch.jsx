export default function useFetch() {
  const url = "https://mandarin.api.weniv.co.kr";

  const getData = async (req, callback, token) => {
    fetch(url + req, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        callback(res);
      });
  };

  const postData = async (req, body, callback, token) => {
    fetch(url + req, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        callback(res);
      });
  };

  const putData = async (req, body, token) => {
    fetch(url + req, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => console.log(`putData(${req}) 결과 :\n`, res));
  };

  const deleteData = async (req, callback, token) => {
    fetch(url + req, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        callback(res);
      });
  };

  return { getData, postData, putData, deleteData };
}
