import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    const detail = query.detail === 'true';

    return (
        <div>
            <h2>어바웃???? {match.params.name}</h2>
            {detail && 'detail: blahblah'}
        </div>
    );
};

export default About;