import { getClient } from "apollo-server-client";
import {
  GetAiCategoriesDocument,
  GetAiCategoriesQuery,
  GetAiCategoriesQueryVariables,
  GetRolesDocument,
  GetRolesQuery,
  GetRolesQueryVariables,
  GetTemplateCategoriesDocument,
  GetTemplateCategoriesQuery,
  GetTemplateCategoriesQueryVariables,
  GetTemplateTagsDocument,
  GetTemplateTagsQuery,
  GetTemplateTagsQueryVariables,
} from "generated";

export async function getAllTemplateTags() {
  const { data } = await getClient().query<
    GetTemplateTagsQuery,
    GetTemplateTagsQueryVariables
  >({
    query: GetTemplateTagsDocument,
    fetchPolicy: "no-cache",
  });

  return data;
}

export async function getAiCategories() {
  const { data } = await getClient().query<
    GetAiCategoriesQuery,
    GetAiCategoriesQueryVariables
  >({
    query: GetAiCategoriesDocument,
    fetchPolicy: "no-cache",
  });

  return data;
}

export async function getAllRoles() {
  const { data } = await getClient().query<
    GetRolesQuery,
    GetRolesQueryVariables
  >({
    query: GetRolesDocument,
    fetchPolicy: "no-cache",
  });

  return data;
}

export async function getAllTemplateCategories() {
  const { data } = await getClient().query<
    GetTemplateCategoriesQuery,
    GetTemplateCategoriesQueryVariables
  >({
    query: GetTemplateCategoriesDocument,
    fetchPolicy: "no-cache",
  });

  return data;
}
