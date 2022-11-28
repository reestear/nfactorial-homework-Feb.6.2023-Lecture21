import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH } from "../images"
import Tweet from './Tweet';


export default function TweetsList({tweets}){

    return tweets.map((tweet, index)=><Tweet {...tweet} key={index}/>)
}