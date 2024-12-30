import { formatDistanceToNow, format } from 'date-fns';

export const formatRelativeTime = (date: string | Date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const formatDate = (date: string | Date) => {
  return format(new Date(date), 'PP');
};