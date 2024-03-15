// @ts-ignore
import { getServerSession } from 'next-auth'
import {getPlanCategories, getPlanInfo, getPlanUser} from './graphql/action'
import {Info} from './Info'
import {PlansBlock} from './PlansBlock'
import {QuestionBlock} from './QuestionBlock'
import {RequestBlock} from './RequestBlock'
import { authOptions } from 'app/api/auth/[...nextauth]/route'

export const PlansPage = async () => {
  const session = await getServerSession(authOptions)
  const {users_by_pk} = await getPlanUser({userId: session?.user.id!})
  const plan_categories = await getPlanCategories()
  const {plans_by_pk} = await getPlanInfo({planId: users_by_pk?.plan_id})
  const questions = [
    {
      question: 'Какие варианты тарифов вы предлагаете?',
      answer:
        'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      question: 'Я исчерпал свои слова до начала следующего расчетного месяца. Как я могу получить больше?',
      answer:
        'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      question:
        'Если я подпишусь на ежемесячный план, будет ли с меня автоматически списываться плата в следующем месяце?',
      answer:
        'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      question: 'Чем отличаются различные варианты качества?',
      answer:
        'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
  ]

  return (
    <div className="flex size-full flex-col ">
      <Info
        plan={plans_by_pk?.name}
        wordsCount={plans_by_pk?.tokens}
        nextPaySum={plans_by_pk?.price}
        nextPayDate={users_by_pk?.date_end_plan}
      />
      <PlansBlock planCategories={plan_categories} planName={plans_by_pk?.name}/>
      <RequestBlock />
      <div className="flex h-auto w-full justify-center">
        <div
          className="flex h-auto w-full max-w-[768px] flex-col md:px-[10px]
            md:py-[32px]
            md:planSm:px-[32px] md:planSm:vsm:px-0
            lg:py-[40px]
            xl:py-[48px]"
        >
          <span
            className="text-[#101828] dark:text-[#F5F5F6] vsm:whitespace-nowrap planSm:text-center md:mb-[24px] md:font-TTNormsBold
              md:text-[18px]
              md:leading-[28px] md:vsm:mb-[16px] lg:mb-[24px] lg:font-NeueMachinaBold
              lg:text-[24px]
              lg:leading-[32px] xl:mb-[32px]"
          >
            Часто задаваемые вопросы
          </span>
          <QuestionBlock questions={questions} />
        </div>
      </div>
    </div>
  )
}
