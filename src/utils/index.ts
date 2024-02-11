import { format, subDays } from 'date-fns'

export const getDate = (sub: number = 0) => {
  const dateXDaysAgo = subDays(new Date(), sub)

  return format(dateXDaysAgo, 'dd/MM/yyyy')
}
