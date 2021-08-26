import React from 'react'

import TerminalIcon from 'components/icons/terminal.svg'
import VideoIcon from 'components/icons/video.svg'
import NoteIcon from 'components/icons/note.svg'
import BooksIcon from 'components/icons/books.svg'

export enum PostTag {
  DEV = 'dev',
  NOTE = 'note',
  READ = 'read',
  VIDEO = 'video'
}

export const TagIcons: Record<PostTag, React.ReactNode> = {
  [PostTag.DEV]: <TerminalIcon />,
  [PostTag.NOTE]: <NoteIcon />,
  [PostTag.READ]: <BooksIcon />,
  [PostTag.VIDEO]: <VideoIcon />
}

export const TagNames: Record<PostTag, string> = {
  [PostTag.DEV]: 'разработка',
  [PostTag.NOTE]: 'заметки',
  [PostTag.READ]: 'лонгриды',
  [PostTag.VIDEO]: 'просмотр'
}
