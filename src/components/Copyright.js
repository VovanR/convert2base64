import React from 'react';
import './Copyright.css';

function Copyright({repoName}) {
	return (
		<a
			className="copyright"
			href={`https://github.com/vovanr/${repoName}`}
			target="_blank"
			rel="noopener noreferrer"
			>
			<span className="copyright__license">
				MIT ©
			</span>

			{' '}

			<span className="copyright__author">
				Vladimir Rodkin
			</span>
		</a>
	);
}

export default Copyright;
