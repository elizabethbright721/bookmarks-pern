import axios from "axios";
import { useState, useEffect } from "react";
import Bookmark from "./Bookmark";

const API = process.env.REACT_APP_API_URL;

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
<<<<<<< HEAD
  useEffect(() => {
    axios.get(`${API}/bookmarks`).then((response) => {
      setBookmarks(response.data)
    }).catch((e)=> {
      console.warn("catch", e)
    })
=======

  useEffect(() => {
    axios
      .get(`${API}/bookmarks`)
      .then((response) => {
        setBookmarks(response.data);
      })
      .catch((e) => {
        console.warn("catch", e);
      });
>>>>>>> e7f9f8bd536b143623d84fa3c2da5c1109d824cd
  }, []);
  return (
    <div className="Bookmarks">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this bookmark</th>
            </tr>
          </thead>
          <tbody>
            {bookmarks.map((bookmark) => {
              return <Bookmark key={bookmark.id} bookmark={bookmark} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Bookmarks;
