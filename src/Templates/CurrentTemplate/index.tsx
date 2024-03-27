import TemplateHeading from './TemplateHeading'
import { GetTemplateById } from 'Templates/graphql/actions'
import { SwitchTemplateStep } from './SwitchTemplateStep'
import { Footer } from './SwitchTemplateStep/GenerateStep/footer'

export const CurrentTemplate = async function CurrentTemplate({params}: {params: {id: string}}) {
const {id} = params

const template = await GetTemplateById({ templateId: id})

const fakeResArr = [
    `В маленьком городе, где мечты часто терялись среди обыденности, жили два Макса. Один — Макс Стэнли, опытный программист с глубокими знаниями в 
        области искусственного интеллекта. Другой — Макс Коллинз, талантливый дизайнер с острым взглядом на будущее. `,
    `Секретный бабушкин рецепт горячих пирожков, от которых вы будете в восторге! `,
]
    return (
        <div className="mr-[6px] flex h-full w-[500px] flex-col rounded-[20px] bg-[#FFFFFF] dark:bg-[#21242C]">
        <TemplateHeading template={template.data['templates']} />
        <SwitchTemplateStep fakeAns={fakeResArr} template={template.data['templates']}/>
        </div>
    )
}