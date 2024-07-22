export const taskStatusTypes = {
  inProgress: 'inProgress',
  finished: 'finished',
  created: 'created',
};
export const taskStatusTypesRu = {
  inProgress: 'В работе',
  finished: 'Завершено',
  created: 'Создана',
};

export const stageStatusTypes = {
  inProgress: 'inProgress',
  finished: 'finished',
  created: 'created',
};
export const stageStatusTypesRu = {
  inProgress: 'В работе',
  finished: 'Завершен',
  created: 'Создан',
};

export const colorStatusTaskTypes = {
  inProgress: { status: taskStatusTypesRu.inProgress, class: 'status-green' },
  finished: { status: taskStatusTypesRu.finished, class: 'status-red' },
  created: { status: taskStatusTypesRu.created, class: 'status-blue' },
};
