import React, {useCallback, useEffect, useState} from 'react'
import './Output.css'

function Output({file}) {
  const [hash, setHash] = useState('')

  useEffect(() => {
    const reader = new window.FileReader()

    reader.readAsDataURL(file)

    reader.onloadend = () => {
      setHash(reader.result)
    }
  }, [])

  const handleClick = useCallback(event => {
    event.target.select()
    document.execCommand('copy')
  }, [])

  if (hash === '') {
    return null
  }

  return (
    <textarea
      className="output"
      value={hash}
      readOnly={true}
      onClick={handleClick}
    />
  )
}

export default Output
