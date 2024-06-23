import React from 'react';

const Table = ({ data }) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th>নিবন্ধন নং</th>
                            <th>বই</th>
                            <th>লেখক</th>
                            <th>ক্যাটেগরি</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200 text-center">
                            <th>3205</th>
                            <td>আমি তপু</td>
                            <td>জাফর ইকবাল</td>
                            <td>গল্প</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;