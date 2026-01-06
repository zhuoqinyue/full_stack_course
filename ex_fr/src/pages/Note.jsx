import { useEffect, useState } from 'react'

const Note = () => {
  const [noteData, setNoteDatas] = useState()
  // 获取路径
  useEffect(() => {
    fetch('api/notes/mine', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${
          JSON.parse(localStorage.getItem('MINECRAFT_USER') || '{}')?.token
        }`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setNoteDatas(data)
      })
  }, [])

  return (
    <ol className="m-4">
      {noteData &&
        noteData.map((item) => (
          <li key={item.id} style={{ color: item.important ? 'red' : '' }}>
            {item.content}
          </li>
        ))}
    </ol>
  )
}

export default Note
