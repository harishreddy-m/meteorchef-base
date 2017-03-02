import React from 'react';
import { Link } from 'react-router';
import PublicIndex from '../components/PublicIndex.js';
import AuthenticatedIndex from '../components/AuthenticatedIndex.js';

const renderIndex = function(hasUser){
  if(hasUser){
    return <AuthenticatedIndex /> ;
  }else{
    return <PublicIndex />
  }
}

const Index = ({ hasUser }) => (
  <div>
  { renderIndex(hasUser) }
  </div>
);



Index.propTypes = {
  hasUser: React.PropTypes.object,
};

export default Index;
