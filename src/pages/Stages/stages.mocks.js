import { createBlob } from '../../utils/create.utils';
import { taskStatusTypes, taskStatusTypesRu } from './stages.types';

const createStages = () => {
  return [
    {
      id: 0,
      number: '1234',
      title: 'SEO-продвижение',
      deadline: new Date(),
      deadlineTime: '5 ч',
      contactPerson: 'Александр Шилов',
      extraCosts: '7500',
      service: {
        id: 0,
        title: 'Услуга 1',
      },
      client: {
        id: 0,
        title: 'a ООО ПКФ «Катав-Ивановский лакокрасочный завод»',
      },
      tasks: [
        {
          id: 0,
          title: 'Добавить блок',
          status: taskStatusTypes.created,
          service: {
            id: 0,
            title: 'Название услуги 1',
          },
          template: {
            id: 0,
            title: 'Название шаблона 1',
          },
          description:
            '1. Сводная кейсов (нужно изменить согласно последним предложениям) +\n' +
            '2. Посадочная страница кейса по разработке сайта. Необходимо убрать зависимость картинки на странице услуги от первой картинке в кейсе, так мы сможем более гибко заполнять кейс. +\n' +
            '3. Поменять заголовки на всем сайте, сейчас на всех блоках заголовок h1 +\n' +
            '4. Добавить на страницу о компании стандарты работы. (Евгения подготовит материал и приложит к задаче, дедлайн для подготовки 30.11) +\n' +
            '5. Изменить блок "наши клиенты" обсуждали идеи в телеграмм чате +\n' +
            '6. Заверстать новые страницы:\n' +
            'Продвижение сайта за позиции\n' +
            'Продвижение молодых сайтов\n' +
            'и Максим еще дополнит какие страницы нужно будет создать. Тз будет чуть позже\n' +
            '7. Упорядочить статьи в блоге по дате добавления +\n' +
            '8. Упорядочить кейсы +\n' +
            '9. Скорректировать вывод кейса по разработке',
          showInLK: true,
          comments: {
            0: {
              id: 0,
              date: new Date(2011, 11, 10),
              sender: {
                id: 0,
                image: createBlob(),
                name: 'Александр Шилов',
              },
              value: {
                text: 'Нам необходимо продвигать Эмали: ПФ-115, НЦ-132, ХВ-785, ХС-759, ХВ-124, ХВ-15, КО-174, КО-198, КО-813, КО-814, ХВ-518, МЛ-12. Грунтовки ГФ-021, ХС-010, АК-570, ФЛ-03. Мастики МБРх, битумно-полимерные, АПМ, праймер НК-50. Лаки БТ-577, ХВ-784. Краски водно-дисперсионные (ВД-ВА 224, ВД-ВА-220, ВД-ВК-111). Серебрянка БТ-177',
              },
            },
          },
          taskLinked: {
            id: 0,
            title: 'Задача № 3 - разработать сайт',
          },
          type: {
            id: 0,
            title: 'Тип задачи 1',
          },
          auditors: [
            {
              id: 0,
              image: createBlob(),
              fio: 'Александр Шилов',
              role: 'Директор',
            },
          ],
          executors: [
            {
              id: 0,
              image: createBlob(),
              fio: 'Александр Шилов',
              role: 'Директор',
            },
          ],
          responsibles: [
            {
              id: 0,
              image: createBlob(),
              fio: 'Александр Шилов',
              role: 'Директор',
            },
          ],
          deadline: new Date(),
          deadlineTime: '5 ч',
          actualTime: '2 дн',
          isNewForUser: true,
        },
        {
          id: 1,
          title: 'Добавить блок',
          status: taskStatusTypes.finished,
          responsible: {
            id: 0,
            image: createBlob(),
            name: 'Александр',
            surname: 'Шилов',
            role: 'Директор',
          },
          deadline: new Date(),
          deadlineTime: '5 ч',
          actualTime: '2 ч',
          isNewForUser: false,
        },
      ],
    },
  ];
};

const createTemplateTypes = () => {
  return [
    {
      id: 0,
      title: 'Название шаблона 1',
    },
    {
      id: 1,
      title: 'Название шаблона 2',
    },
    {
      id: 2,
      title: 'Название шаблона 3',
    },
  ];
};

const createTaskTypes = () => {
  return [
    {
      id: 0,
      title: 'Тип задачи 1',
    },
    {
      id: 1,
      title: 'Тип задачи 2',
    },
    {
      id: 2,
      title: 'Тип задачи 3',
    },
  ];
};

export default { createStages, createTemplateTypes };
