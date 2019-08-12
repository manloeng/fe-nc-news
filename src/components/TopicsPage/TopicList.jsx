import React, { Component } from 'react';
import './TopicList.css';
import TopicCard from './TopicCard';
import Header from '../partials/Header/Header';
import Loader from '../partials/Loader/Loader';
import AddTopicModal from './AddTopicModal';

class TopicList extends Component {
  //loader problem here
  //topicdata persists.
  componentDidMount() {
    const { path } = this.props;
    console.log(path);
  }

  render() {
    const { topics, updateTopicsList, path, user } = this.props;
    console.log(topics);
    //loader problem here
    //topicdata persists.
    return !topics ? (
      <Loader />
    ) : (
      <section className="topicsSection">
        <Header route={path} />
        <AddTopicModal user={user} updateTopicsList={updateTopicsList} />
        <div className="topicCardSection">
          {topics.map((topic) => {
            return <TopicCard {...topic} key={topic.slug} />;
          })}
        </div>
      </section>
    );
  }
}
export default TopicList;
