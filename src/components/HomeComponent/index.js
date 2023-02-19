import React from "react";
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";
import RightBar from "./RightBar";
import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH, PROFILE_IMG_PATH} from './images';

class Home extends React.Component {
    constructor(){
        super();

        this.state = {
            count: 0,
            content: '',
            searchFor: '',
            tweets: [
                {
                    id: 0,
                    authorName: 'Free KZ today',
                    authorUsername: '@kz',
                    img: KZ_IMG_PATH,
                    content: 'UPDATE: Alibek says he has not considered becoming finance minister again',
                    replies:200,
                    retweets: 1000,
                    likes:500,
                    topic: 'politics'
                },
                {
                    id: 1,
                    authorName: 'nFactorial',
                    authorUsername: '@nfactorial',
                    img: NFACTORIAL_IMG_PATH,
                    content: 'Data analytics course starts today!',
                    replies: 10000000,
                    retweets: 1000000,
                    likes: 500,
                    topic: 'education'
                },
                {
                    id:2,
                    authorName: 'nFactorial',
                    authorUsername: '@nfactorial',
                    img: NFACTORIAL_IMG_PATH,
                    content: 'Black friday! Успей купить курсы сегодня!',
                    replies: 10000000,
                    retweets: 1000000,
                    likes: 500,
                    topic: 'education'
                },
            ],
            filteredTweets: [
                {
                id: 0,
                authorName: 'Free KZ today',
                authorUsername: '@kz',
                img: KZ_IMG_PATH,
                content: 'UPDATE: Alibek says he has not considered becoming finance minister again',
                replies:200,
                retweets: 1000,
                likes:500,
                topic: 'politics'
            },
            {
                id: 1,
                authorName: 'nFactorial',
                authorUsername: '@nfactorial',
                img: NFACTORIAL_IMG_PATH,
                content: 'Data analytics course starts today!',
                replies: 10000000,
                retweets: 1000000,
                likes: 500,
                topic: 'education'
            },
            {
                id:2,
                authorName: 'nFactorial',
                authorUsername: '@nfactorial',
                img: NFACTORIAL_IMG_PATH,
                content: 'Black friday! Успей купить курсы сегодня!',
                replies: 10000000,
                retweets: 1000000,
                likes: 500,
                topic: 'education'
            }
        ]
        }
    }

    onChangeTextInput = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    onChangeSearchFor = (e) => {
        this.setState({
            searchFor: e.target.value
        })
        // console.log(this.state.searchFor)
    }

    onClickSearchFor = (e) => {
        if(e.key === 'Enter'){
            let {searchFor, tweets, filteredTweets} = this.state;
            console.log('return pressed')
            console.log(`the searchFor value is |${searchFor}|`)

            this.setState({
                filteredTweets: tweets.filter(item => item.topic === searchFor)
            })
        }
    }

    addToTweets = () => {
        const newTweet = {
            id: this.state.tweets.length,
            authorName: 'Ruslan',
            authorUsername: '@ruslahn',
            img: PROFILE_IMG_PATH,
            content: this.state.content,
            replies: 0,
            retweets: 0,
            likes: 0,
            topic: 'blabla'
        }

        this.setState({
            tweets: [newTweet, ...this.state.tweets],
            filteredTweets: [newTweet, ...this.state.tweets],
            searchFor: '',
            content: ''
        })
    }

    deleteTweet = (id) => {
        // id = 0
        this.setState({
            tweets: this.state.tweets.filter(item=>item.id!==id)
        })
    }

    filterTweetsByTopic = (topic) => {
        console.log('filter', topic)
        this.setState({
            filteredTweets: this.state.tweets.filter(item=>item.topic === topic)
        })
    }

    clearSearch = () => {
        const {tweets} = this.state

        this.setState({
            filteredTweets: tweets,
            searchFor: ''
        })
    }
 
    render(){
        const { tweets, content, searchFor, filteredTweets} = this.state;

        return(
            <div className="d-flex">
                <div className="mt-3" style={{width: '650px'}}>
                    <h5 className="mx-3">Home</h5>
                    <NewTweet content={content} onChangeTextInput={this.onChangeTextInput} onTweet={this.addToTweets}/>
                    {/* <div>
                        <button onClick={()=>this.filterTweetsByTopic('politics')}>{`Politics ${this.state.count}`}</button>
                        <button onClick={()=>this.filterTweetsByTopic('education')}>Education</button>
                        <button onClick={()=>this.filterTweetsByTopic('blabla')}>Blabla</button>
                    </div> */}
                    <TweetsList tweets={filteredTweets} deleteTweet={this.deleteTweet}/>
                </div>
                <div className='vertical-divider'></div>
                <div>
                    <RightBar clearSearch = {this.clearSearch} onClickSearchFor = {this.onClickSearchFor} onChangeSearchFor = {this.onChangeSearchFor} searchFor = {searchFor}/>
                </div>
            </div>
        )
    }
}

export default Home;