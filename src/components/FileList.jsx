import React, {useCallback} from 'react'
import Output from './Output'
import './FileList.css'

function FileList({files}) {
  const onClickFileName = useCallback(e => {
    e.target.select()
    document.execCommand('copy')
  }, [])

  return(
    <ul className="file-list">
      {files.map(file => {
        const filename = file.name.substring(0, file.name.lastIndexOf('.'))

        return (
          <li key={file.preview}>
            <span className="file-list__preview">
              <img
                src={file.preview}
                alt=""
              />

              <input
                value={filename}
                readOnly={true}
                onClick={onClickFileName}
              />
            </span>

            <span className="file-list__textarea">
              <Output file={file}/>
            </span>
          </li>
        )
      })}
    </ul>
  )
}

export default FileList
