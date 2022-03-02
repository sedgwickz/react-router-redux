const API = {
  list: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await res.json();
    return result;
  }
};

export default API;
