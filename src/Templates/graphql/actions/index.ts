"use server"
import { getClient } from "apollo-server-client";
import { GetTemplateByIdDocument, GetTemplateByIdQuery, GetTemplateByIdQueryVariables } from "generated";

export async function GetTemplateById(props: {templateId: string}) {
const data= await getClient().query<GetTemplateByIdQuery,GetTemplateByIdQueryVariables>({
    query: GetTemplateByIdDocument,
    variables: {
        templateId: props.templateId,
    }
    })
    return data
}