import React, { useEffect, useState } from "react";
import api from "../../services/api";
import md5 from "md5";

const publickey = "7a7880d4362c3cb3e6908ae79a90ad5f";
const privatekey = "c3a024c5f9e263d3bfb5ce043da88682498b43ee";
const time = Number(new Date());
const hash = md5(time + privatekey + publickey);

const Home = (props) => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    getComics();
  }, []);

  const getComics = async () => {
    try {
      const response = await api.get(
        `comics?ts=${time}&apikey=${publickey}&hash=${hash}`
      );

      if (!response.ok) throw new Error(`Fetch error: ${response.statusText}`);
      const json = await response.json();

      console.log("json:", json.data.results);

      setComics(json.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Home</h1>

      {comics.map((c) => (
        <div>
          <img src={c.thumbnail.path}></img>
          <span>
            {c.title} - <small>{c.prices[0].price}</small>
          </span>
        </div>
      ))}
    </>
  );
};
export default Home;

//7a7880d4362c3cb3e6908ae79a90ad5f
//c3a024c5f9e263d3bfb5ce043da88682498b43ee
