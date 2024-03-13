"use client";
import { imgixLoader } from "@delicious-simplicity/next-image-imgix-loader";
import { createChatAction } from "../../../../Chat/graphql/action";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { memo, useCallback } from "react";
import { useChatStore } from "Chat/lib/useChatStore";
// Нигде не используется, пока закомментил
// import {VisibilityContext} from 'react-horizontal-scrolling-menu'

export const Card = memo(function Card(props: {
  itemId: string;
  mrFull: string;
  src: string;
  title: string;
  promt: string;
}) {
  // Нигде не используется, пока закомментил
  // const visibility = React.useContext(VisibilityContext)
  // const _visible = visibility.isItemVisible(itemId)
  const { data: session } = useSession();
  const model = useChatStore.getState().model
  const handleCreateNewChat = useCallback(
    async (userId: string, systemPromt: string) => {
      try {
        await createChatAction({
          model: model!,
          title: props.title,
          userId: userId,
          systemPromt: systemPromt,
        });
      } catch (error) {
        console.error(error);
      }
    },
    [],
  );
  return (
    <div
      onClick={() => handleCreateNewChat(session?.user.id!, props.promt)}
      role="button"
      style={{
        display: "inline-block",
        userSelect: "none",
      }}
      tabIndex={0}
      className={`relative ml-[6px] flex items-center justify-center rounded-[20px] bg-[#fff] dark:bg-[black] mr-[${props.mrFull}] cursor-pointer sm:h-[120px] sm:w-[124px] md:mx-[4px] md:h-[132px] md:w-[109px] lg:h-[150px] lg:w-[124px] `}
    >
      <Image
        src={`https://imi-front.imgix.net/uploads/${props.src}.png`}
        loader={(props) => imgixLoader(props, { fit: "crop", ar: "1:1" })}
        alt="chatbotimage"
        draggable={false}
        width={121}
        height={145}
        className="relative left-[1px] top-4"
      />
      <span className="absolute bottom-[10px] z-50 flex w-full justify-center text-center font-TTNormsMedium text-heading-text-lite dark:text-heading-text-dark md:text-[12px] md:leading-[14px] lg:text-[16px] lg:leading-[19px]">
        {props.title}
      </span>
      <div className="absolute bottom-0 z-40 h-[84px] w-full rounded-b-[20px] bg-gradient-to-t from-[white] dark:from-[black]" />
    </div>
  );
});
