import React from 'react';
import Output from './Output';
import './FileList.css';

function FileList({files}) {
	return(
		<ul className="file-list">
			{files.map(file => {
				console.log(file)
				const filename = file.name.substring(0, file.name.lastIndexOf('.'));

				return (
					<li key={file.preview}>
						<span className="file-list__preview">
							<img
								src={file.preview}
								alt=""
							/>

							<input
								value={filename}
								readOnly
							/>
						</span>

						<span className="file-list__textarea">
							<Output file={file}/>
						</span>
					</li>
				);
			})}
		</ul>
	)
}

export default FileList;
