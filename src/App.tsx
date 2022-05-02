import { Tweet } from "./components/Tweet";
import {useState} from "react";
import './app.css';
import {AppRoutes } from "./routes";

function App() {
  const [tweets,setTweets] = useState<string[]>([
      'tweet 1',
      'tweet 2',
      'tweet 3',
      'tweet 4',
  ])

  function createTweet(){
    setTweets([...tweets,'Tweet 5'])
  }

  return (
      <AppRoutes/>
      /*<div>
    {tweets.map(tweet =>{
      return <Tweet text={tweet} />
    })}
    <button
        onClick={createTweet}
        style={{
            backgroundColor:'#8257e6',
            border: 0,
            padding: '6px 12px',
            color:'#FFF'
        }}
    >
        Adicionar Tweet</button>
  </div>*/)
}

export default App
