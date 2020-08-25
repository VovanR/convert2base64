import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import classNames from 'classnames'
import Copyright from './components/Copyright'
import FileList from './components/FileList'
import 'normalize.css'
import './App.css'

function App() {
  const [files, setFiles] = useState([])

  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file),
    })))
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    open,
  } = useDropzone({onDrop})

  return (
    <div
      className="App"
      {...getRootProps({onClick: event => event.stopPropagation()})}
    >
      <input {...getInputProps()}/>

      <div
        className={classNames('drop-zone', {
        'drop-zone_active': isDragActive,
        })}
        onClick={open}
      >
        {isDragActive ? (
          <span>
            Drop the files here ...
          </span>
        ) : (
          <span>
            Drag 'n' drop some files here, or click to select files
          </span>
        )}
      </div>

      <FileList files={files}/>

      <Copyright repoName="convert2base64"/>
    </div>
  )
}

export default App
