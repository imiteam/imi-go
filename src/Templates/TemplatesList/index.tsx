import { getAllTemplateCategories, getAllTemplateTags } from "Home/graphql/actions/query";
import { SearchInput } from "./searchInput";
import { TemplateTags } from "Home/TemplateTags";
import { TemplatesSection } from "./templatesSection";

export const TemplatesList = async function TemplatesList(){

    const templateTags = await getAllTemplateTags();

    const templateCategories = await getAllTemplateCategories();

    return (
        <div className="flex h-full w-[506px] flex-col pt-[16px]">
            <div className="pr-[24px]">
                <SearchInput placeholder="Найти текстовый шаблон" isHomePage={false} />
            </div>
            <TemplateTags tags={templateTags["template_tags"]} isHomePage={false} />
            <TemplatesSection templateCategories={templateCategories}/>
        </div>
    )
}