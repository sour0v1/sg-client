import React from 'react';
import { useParams } from 'react-router-dom';

const MembersTable = () => {
    const {category} = useParams();
    return (
        <div>
            <h1>{category} member page</h1>
        </div>
    );
};

export default MembersTable;