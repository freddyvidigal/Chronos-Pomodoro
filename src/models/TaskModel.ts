import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; //quando chegar ao final
  interruptDate: number | null; //quando a task for interrompida
  // Type: 'worktime' | 'shortBreakTime' | 'longBreakTime';
  type: keyof TaskStateModel['config'];
};
