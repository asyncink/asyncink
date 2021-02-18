import React, { FC } from 'react'
import dayjs from 'dayjs'

interface Props {
  dateString: string
}

const Date: FC<Props> = ({ dateString }) => {
  return <time dateTime={dateString}>{dayjs(dateString).format('D MMMM')}</time>
}

export default Date
