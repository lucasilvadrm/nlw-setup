import { api } from "../lib/axios";

interface NewHabit {
  title: string;
  weekDays: number[];
}

export const postNewHabitService = async ({ title, weekDays }: NewHabit) => {
  try {
    return await api.post("habits", {
      title,
      weekDays,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getSummaryService = async () => {
  try {
    const { data: payload } = await api.get("summary");
    return payload;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
