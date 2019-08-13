import React from 'react';
import './TopicList.css';
import TopicCard from './TopicCard';
import Header from '../partials/Header/Header';
import AddTopicModal from './AddTopicModal';

const TopicList = ({ topics, updateTopicsList, path, user }) => {
  return (
    <section id="topicsSection">
      <Header route={path} />
      <AddTopicModal user={user} updateTopicsList={updateTopicsList} />
      <div className="topicCardSection">
        {topics.map((topic) => {
          return <TopicCard {...topic} key={topic.slug} />;
        })}
      </div>
    </section>
  );
};
export default TopicList;
