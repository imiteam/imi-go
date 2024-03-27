"use server"
import { ReactNode } from "react";
import { Heading } from "./Heading";
import { Note } from "./Note";
import { getClient } from "apollo-server-client";
import { GetRolesDocument, GetTemplateCategoriesDocument, GetTemplateTagsDocument } from "generated";
import { getServerSession } from "next-auth";
import { authOptions } from "app/api/auth/[...nextauth]/route";
import { getUserInfo } from "Account/Plans/graphql/action";
import React from "react";
import { getAllRoles, getAllTemplateCategories, getAllTemplateTags } from "Home/graphql/actions/query";

export const TemplatesLayout = async function TemplatesLayout({
    children,
}: {
    children: ReactNode;
}) {

    const templateTags = await getAllTemplateTags();

    const roles = await getAllRoles();

    const templateCategories = await getAllTemplateCategories();

    const session = await getServerSession(authOptions)

    const userInfo = await getUserInfo({userId: session?.user.id!})
    return (
        <main className=" flex w-full flex-col items-center bg-bg-lite pb-[16px] dark:bg-bg-dark" id="templatesPage">
            <Heading userInfo={userInfo} userId={session?.user.id!}/>
            <div className="flex w-full grow overflow-hidden px-[24px]">
            {children}
                <Note roles={roles?.roles!} templateCategories={templateCategories}/>
            </div>
        </main>
    )
}