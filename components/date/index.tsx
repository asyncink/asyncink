import React, { FC, useMemo } from 'react'
import dayjs from 'dayjs'

interface Props {
  dateString: string
}

const Date: FC<Props> = ({ dateString }) => {
  const date = useMemo(() => dayjs(dateString).format('D MMMM'), [dateString])
  return <time dateTime={dateString}>{date}</time>
}

export default Date
