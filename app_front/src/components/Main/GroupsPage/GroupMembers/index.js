import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const GroupMembers = ({ targetGroup }) => (
  <div className="group_members_container">
    <h1>Membres du groupe {targetGroup.name}</h1>
    <ul>
      {targetGroup.users.map((user) => {
        const fullname = `${user.firstname} ${user.lastname}`;
        return (
          <li key={user.id} className="user">
            <div className="full_name">{fullname}</div>
            <p>Lecture</p>
            <a>Supprimer</a>
          </li>
        );
      })}
    </ul>
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="23.5" fill="white" stroke="#2ECC71" strokeWidth="3" />
      <line x1="25.5" y1="17" x2="25.5" y2="34" stroke="#2ECC71" strokeWidth="3" />
      <line x1="34" y1="25.5" x2="17" y2="25.5" stroke="#2ECC71" strokeWidth="3" />
    </svg>

  </div>
);

export default GroupMembers;

GroupMembers.propTypes = {
  targetGroup: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        firstname: PropTypes.string,
        lastname: PropTypes.string,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};
