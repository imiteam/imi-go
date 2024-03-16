import { getMyChats } from "Chat/graphql/action"
import TextHistoryPage from "./TextHistoryPage"




export const TextHistories = async function TextHistories(props : {
  searchParams: {[key: string]: string | string[] | undefined}
}) {

  const historyData = await getMyChats({
    userId: props.searchParams.userId as string,
    value: '',
  })

  // const mocHistory: MocHistoryDataType = {
  //   history_id: 1,
  //   historyCategoty: 'text',
  //   histors: [
  //     {
  //       id: 1,
  //       format: 'doc',
  //       title: {
  //         title_name: 'Без названия1',
  //         title_icon: 'doc',
  //         title_description:
  //           'В маленьком городе, где мечты часто теряютсяsssssssssssssssssssssssssssssssssssssssssssssssssssssss',
  //       },
  //       type: {
  //         type_name: 'Документ',
  //         type_icon: 'vk',
  //         type_description: 'Без шаблона',
  //       },
  //       edited: {
  //         ago: '21 час назад',
  //         timestemp: {
  //           date: '31.11.2023',
  //           time: '07:35',
  //         },
  //       },
  //     },
  //     {
  //       id: 2,
  //       format: 'chat',
  //       title: {
  //         title_name: 'Статья в VK',
  //         title_icon: 'chat',
  //         title_description: 'Напиши статью для группы по продаже печен',
  //       },
  //       type: {
  //         type_name: 'dsfsdfsf',
  //         type_icon: 'vk',
  //         type_description: 'IMI чат',
  //       },
  //       edited: {
  //         ago: '3 минуты назад',
  //         timestemp: {
  //           date: '02.01.2024',
  //           time: '14:55',
  //         },
  //       },
  //     },
  //     {
  //       id: 3,
  //       format: 'doc',
  //       title: {
  //         title_name: 'Безsdad названия1',
  //         title_icon: 'doc',
  //         title_description: 'В маленьком городе, где мечты часто теряются',
  //       },
  //       type: {
  //         type_name: 'Документ',
  //         type_icon: 'vk',
  //         type_description: 'Без шаблона',
  //       },
  //       edited: {
  //         ago: '21 час назад',
  //         timestemp: {
  //           date: '31.11.2023',
  //           time: '07:35',
  //         },
  //       },
  //     },
  //     {
  //       id: 4,
  //       format: 'chat',
  //       title: {
  //         title_name: 'Статья в VKca',
  //         title_icon: 'chat',
  //         title_description: 'Напиши статью для группы по продаже печен',
  //       },
  //       type: {
  //         type_name: 'sadasd',
  //         type_icon: 'vk',
  //         type_description: 'IMI чат',
  //       },
  //       edited: {
  //         ago: '3 минуты назад',
  //         timestemp: {
  //           date: '02.01.2024',
  //           time: '14:55',
  //         },
  //       },
  //     },
  //     {
  //       id: 5,
  //       format: 'doc',
  //       title: {
  //         title_name: 'Без22ds названия1',
  //         title_icon: 'doc',
  //         title_description: 'В маленьком городе, где мечты часто теряются',
  //       },
  //       type: {
  //         type_name: 'Документ',
  //         type_icon: '',
  //         type_description: 'Без шаблона',
  //       },
  //       edited: {
  //         ago: '21 час назад',
  //         timestemp: {
  //           date: '31.11.2023',
  //           time: '07:35',
  //         },
  //       },
  //     },
  //     {
  //       id: 6,
  //       format: 'chat',
  //       title: {
  //         title_name: 'Статья sdв VKsd',
  //         title_icon: 'chat',
  //         title_description: 'Напиши статью для группы по продаже печен',
  //       },
  //       type: {
  //         type_name: '',
  //         type_icon: 'vk',
  //         type_description: 'IMI чат',
  //       },
  //       edited: {
  //         ago: '3 минуты назад',
  //         timestemp: {
  //           date: '02.01.2024',
  //           time: '14:55',
  //         },
  //       },
  //     },
  //     {
  //       id: 7,
  //       format: 'doc',
  //       title: {
  //         title_name: 'Без sdsaназвания1asd',
  //         title_icon: 'doc',
  //         title_description: 'В маленьком городе, где мечты часто теряются',
  //       },
  //       type: {
  //         type_name: 'Документ',
  //         type_icon: 'vk',
  //         type_description: 'Без шаблона',
  //       },
  //       edited: {
  //         ago: '21 час назад',
  //         timestemp: {
  //           date: '31.11.2023',
  //           time: '07:35',
  //         },
  //       },
  //     },
  //     {
  //       id: 8,
  //       format: 'chat',
  //       title: {
  //         title_name: 'Статьяsa в sadVK',
  //         title_icon: 'chat',
  //         title_description: 'Напиши статью для группы по продаже печен',
  //       },
  //       type: {
  //         type_name: '',
  //         type_icon: 'vk',
  //         type_description: 'IMI чат',
  //       },
  //       edited: {
  //         ago: '3 минуты назад',
  //         timestemp: {
  //           date: '02.01.2024',
  //           time: '14:55',
  //         },
  //       },
  //     },
  //     {
  //       id: 9,
  //       format: 'doc',
  //       title: {
  //         title_name: 'Без asdназвания1sac',
  //         title_icon: 'doc',
  //         title_description: 'В маленьком городе, где мечты часто теряются',
  //       },
  //       type: {
  //         type_name: 'Документ',
  //         type_icon: 'vk',
  //         type_description: 'Без шаблона',
  //       },
  //       edited: {
  //         ago: '21 час назад',
  //         timestemp: {
  //           date: '31.11.2023',
  //           time: '07:35',
  //         },
  //       },
  //     },
  //     {
  //       id: 10,
  //       format: 'chat',
  //       title: {
  //         title_name: 'Статьяzxc в VKzz',
  //         title_icon: 'chat',
  //         title_description: 'Напиши статью для группы по продаже печен',
  //       },
  //       type: {
  //         type_name: '',
  //         type_icon: 'vk',
  //         type_description: 'IMI чат',
  //       },
  //       edited: {
  //         ago: '3 минуты назад',
  //         timestemp: {
  //           date: '02.01.2024',
  //           time: '14:55',
  //         },
  //       },
  //     },
  //     {
  //       id: 11,
  //       format: 'doc',
  //       title: {
  //         title_name: 'Беzз названия1xxxzz',
  //         title_icon: 'doc',
  //         title_description: 'В маленьком городе, где мечты часто теряются',
  //       },
  //       type: {
  //         type_name: 'Документ',
  //         type_icon: 'vk',
  //         type_description: 'Без шаблона',
  //       },
  //       edited: {
  //         ago: '21 час назад',
  //         timestemp: {
  //           date: '31.11.2023',
  //           time: '07:35',
  //         },
  //       },
  //     },
  //     {
  //       id: 12,
  //       format: 'chat',
  //       title: {
  //         title_name: 'Стать12я вxc VK',
  //         title_icon: 'chat',
  //         title_description: 'Напиши статью для группы по продаже печен',
  //       },
  //       type: {
  //         type_name: '',
  //         type_icon: 'vk',
  //         type_description: 'IMI чат',
  //       },
  //       edited: {
  //         ago: '3 минуты назад',
  //         timestemp: {
  //           date: '02.01.2024',
  //           time: '14:55',
  //         },
  //       },
  //     },
  //     {
  //       id: 13,
  //       format: 'doc',
  //       title: {
  //         title_name: 'Беwecxз названия1544',
  //         title_icon: 'doc',
  //         title_description: 'В маленьком городе, где мечты часто теряются',
  //       },
  //       type: {
  //         type_name: 'Документ',
  //         type_icon: 'vk',
  //         type_description: 'Без шаблона',
  //       },
  //       edited: {
  //         ago: '21 час назад',
  //         timestemp: {
  //           date: '31.11.2023',
  //           time: '07:35',
  //         },
  //       },
  //     },
  //     {
  //       id: 14,
  //       format: 'chat',
  //       title: {
  //         title_name: 'Статьfdfя вxxv VK',
  //         title_icon: 'chat',
  //         title_description: 'Напиши статью для группы по продаже печен',
  //       },
  //       type: {
  //         type_name: '',
  //         type_icon: 'vk',
  //         type_description: 'IMI чат',
  //       },
  //       edited: {
  //         ago: '3 минуты назад',
  //         timestemp: {
  //           date: '02.01.2024',
  //           time: '14:55',
  //         },
  //       },
  //     },
  //     {
  //       id: 15,
  //       format: 'doc',
  //       title: {
  //         title_name: 'Безwwc названияweq1',
  //         title_icon: 'doc',
  //         title_description: 'В маленьком городе, где мечты часто теряются',
  //       },
  //       type: {
  //         type_name: 'Документ',
  //         type_icon: 'vk',
  //         type_description: 'Без шаблона',
  //       },
  //       edited: {
  //         ago: '21 час назад',
  //         timestemp: {
  //           date: '31.11.2023',
  //           time: '07:35',
  //         },
  //       },
  //     },
  //     {
  //       id: 16,
  //       format: 'chat',
  //       title: {
  //         title_name: 'Стаsaтья в VasdK',
  //         title_icon: 'chat',
  //         title_description: 'Напиши статью для группы по продаже печен',
  //       },
  //       type: {
  //         type_name: '',
  //         type_icon: 'vk',
  //         type_description: 'IMI чат',
  //       },
  //       edited: {
  //         ago: '3 минуты назад',
  //         timestemp: {
  //           date: '02.01.2024',
  //           time: '14:55',
  //         },
  //       },
  //     },
  //     {
  //       id: 17,
  //       format: 'chat',
  //       title: {
  //         title_name: 'Стsfgатья jв VK',
  //         title_icon: 'chat',
  //         title_description: 'Напиши статью для группы по продаже печен',
  //       },
  //       type: {
  //         type_name: '',
  //         type_icon: 'vk',
  //         type_description: 'IMI чат',
  //       },
  //       edited: {
  //         ago: '3 минуты назад',
  //         timestemp: {
  //           date: '02.01.2024',
  //           time: '14:55',
  //         },
  //       },
  //     },
  //   ],
  // }
  return (
    <div className="size-full">
      <TextHistoryPage textHistory={historyData.chats} />
    </div>
  )
}
