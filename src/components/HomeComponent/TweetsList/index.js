import { KZ_IMG_PATH,NFACTORIAL_IMG_PATH } from '../images';
import Tweet from './Tweet';

export default function TweetsList(){
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
        {
            authorName: 'nFactorial',
            authorUsername: '@nfactorial',
            img: NFACTORIAL_IMG_PATH,
            content: 'Black friday! Успей купить курсы сегодня!',
            replies: 1,
            retweets: 4,
            likes: 4
        },
        {
            authorName: 'nFactorial',
            authorUsername: '@nfactorial',
            img: NFACTORIAL_IMG_PATH,
            content: 'Black friday! Успей купить курсы сегодня!',
            replies: 1,
            retweets: 4,
            likes: 4
        },
        {
            authorName: 'nFactorial',
            authorUsername: '@nfactorial',
            img: NFACTORIAL_IMG_PATH,
            content: 'Black friday! Успей купить курсы сегодня! Успей купить курсы сегодня! Успей купить курсы сегодня! Успей купить курсы сегодня!Успей купить курсы сегодня!Успей купить курсы сегодня!Успей купить курсы сегодня!Успей купить курсы сегодня!Успей купить курсы сегодня!Успей купить курсы сегодня!',
            replies: 1,
            retweets: 4,
            likes: 4
        }
    ]

    return tweets.map((tweet, index)=><Tweet {...tweet} key={index}/>)
}