import React from "react";
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";
import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH, PROFILE_IMG_PATH} from './images';

export default function Home(){
    const tweets = [
        {
            authorName: 'Free KZ today',
            authorUsername: '@kz',
            img: KZ_IMG_PATH,
            content: 'UPDATE: Alibek says he has not considered becoming finance minister again',
            replies:200,
            retweets: 1000,
            likes:500
        },
        {
            authorName: 'nFactorial',
            authorUsername: '@nfactorial',
            img: NFACTORIAL_IMG_PATH,
            content: 'Data analytics course starts today!',
            replies: 10000000,
            retweets: 1000000,
            likes: 500
        },
        {
            authorName: 'nFactorial',
            authorUsername: '@nfactorial',
            img: NFACTORIAL_IMG_PATH,
            content: 'Black friday! Успей купить курсы сегодня!',
            replies: 10000000,
            retweets: 1000000,
            likes: 500
        },
    ]
    return (
        <div className="w-50 mt-3">
            <h5 className="mx-3">Home</h5>
            <NewTweet/>
            <TweetsList tweets={tweets}/>
        </div>
    )
}