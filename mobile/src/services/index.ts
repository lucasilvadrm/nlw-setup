import { api } from '../lib/axios';

export const fetchDataSummary = async () => {
  const response = await (await api.get('/summary')).data;
  return response;
};

export const createNewHabit = async ({
  title,
  weekDays,
}: {
  title: string;
  weekDays: number[];
}) => {
  await api.post('/habits', { title, weekDays });
};
