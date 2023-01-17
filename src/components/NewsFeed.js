import { useEffect, useState } from "react"
import axios from "axios";

const NewsFeed = () => {
  const [articles, setArticles] = useState(null)

  useEffect(() => {

  const options = {
    method: 'GET',
    url: 'http://localhost:8000/news',

  };

  axios.request(options).then(function (response) {
    console.log(response.data);
    setArticles(response.data)

  }).catch(function (error) {
    console.error(error);
  });

  }, [])

  const first4Articles = articles?.slice(0,4)


  
    return (
      <div className="News-Feed">
        <h2>News Feed</h2>

        {first4Articles?.map((article, _index) => (<div key={_index}><a href={article.url}><p>{article.title}</p></a></div>))}
      </div>
    )
  }
  
  export default NewsFeed
  