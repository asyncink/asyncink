import React, { FC } from 'react'
import dayjs from 'dayjs'

interface Props {
  dateString: string
}

const Date: FC<Props> = ({ dateString }) => {
  return (
    <time dateTime={dateString}>
      {dayjs('2019-01-25').format('MMMM D, YYYY')}
    </time>
  )
}

export default Date
