import React, { Component } from 'react';
import './TopicList.css';
import TopicCard from './TopicCard';
import Header from '../partials/Header/Header';
import Loader from '../partials/Loader/Loader';
import AddTopicModal from './AddTopicModal';

class TopicList extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading } = this.state;
    const { topics, updateTopicsList, path, user } = this.props;

    if (isLoading) {
      return <Loader />;
    } else {
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
    }
  }
}
export default TopicList;
