import { GetUserHistoryQuery } from "generated"

export default function History(props: {historyData: GetUserHistoryQuery["payment_history"]}) {

  function formatDate(dateString : string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
  }

  return (
    
    <div className="h-auto w-full flex-col md:hidden md:vsm:flex lg:hidden">
      {props.historyData.map((d) => {
        return (
          <div
            key={d.transaction_id}
            className="mb-2 flex h-[92px] w-full justify-between rounded-[16px] bg-[#FFFFFF] p-4 dark:bg-[#21242C]"
          >
            <div className="flex h-full w-auto flex-col">
              <span className="mb-4 font-TTNormsMedium text-[10px] leading-[14px] text-[#101828] dark:text-[#F5F5F6]">
                ID #{d.transaction_id}
              </span>
              <span className="font-TTNormsMedium text-[10px] leading-[24px] text-[#101828] dark:text-[#F5F5F6]">
                {d.plan}
              </span>
              <span className="font-TTNormsRegular text-[10px] leading-[0px] text-[#667085] dark:text-[#98A2B3]">
                период
              </span>
            </div>
            <div className="flex h-full w-auto flex-col">
              <span className="mb-4 font-TTNormsRegular text-[10px] leading-[18px] text-[#667085] dark:text-[#98A2B3]">
                {formatDate(d.date)}
              </span>
              <span className="font-TTNormsMedium text-[10px] leading-[15px] text-[#101828] dark:text-[#F5F5F6]">
                {d.card} {d.four_last}
              </span>
              <span className="font-TTNormsRegular text-[10px] leading-[12px] text-[#667085] dark:text-[#98A2B3]">
                {d.card_exp_date}
              </span>
            </div>
            <div className="flex h-full w-auto flex-col ">
              {d.status === 1? (
                <span className="mb-4 font-TTNormsMedium text-[10px] leading-[14px] text-[#079455] dark:text-[#47CD89]">
                  Оплачен
                </span>
              ) :
              d.status === 1 ?
              (
                <span className="mb-4 font-TTNormsMedium text-[10px] leading-[14px] text-[#D92D20] dark:text-[#F97066]">
                  Отменен
                </span>
              )
                :
                <span className="mb-4 font-TTNormsMedium text-[10px] leading-[14px] text-[#3959af] dark:text-[#57699c]">
                  Возврат
                </span>
              }
              <span className="font-TTNormsMedium text-[10px] leading-[23px] text-[#101828] dark:text-[#F5F5F6]">
                {d.amount + ' ₽'}
              </span>
              <span className="font-TTNormsRegular text-[10px] leading-[1px] text-[#667085] dark:text-[#98A2B3]">
                сумма
              </span>
            </div>

            {/* {d.promocode.code ? (
              <div className="flex h-full w-auto flex-col justify-end">
                <span className="font-TTNormsMedium text-[11px] leading-[9px] text-[#101828] dark:text-[#F5F5F6]">
                  {d.promocode.code}
                </span>
                <span className="font-TTNormsRegular text-[10px] leading-[14px] text-[#667085] dark:text-[#98A2B3]">
                  {d.promocode.description + '% скидка'}
                </span>
              </div>
            ) : (
              <div className="flex h-full w-auto items-end justify-center">
                <span className="font-TTNormsRegular text-[10px] leading-[25px] text-[#667085] dark:text-[#98A2B3]">
                  без промокода
                </span>
              </div>
            )} */}
            <div className="flex h-full w-auto items-end justify-center">
                <span className="font-TTNormsRegular text-[10px] leading-[25px] text-[#667085] dark:text-[#98A2B3]">
                  без промокода
                </span>
              </div>
          </div>
        )
      })}
    </div>
  )
}
