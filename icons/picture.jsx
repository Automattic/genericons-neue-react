
import React from 'react';

const Picture = (props) => {
	return (
        <svg  viewBox="0 0 16 16"><rect x="0" fill="none" width="16" height="16"/><g {...props}><path d="M12 2H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 9l2-4 1.5 3 2-4 2.5 5H4z"/></g></svg>
	);
};

export default Picture;

