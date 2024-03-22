import {
  getAiCategories,
  getAllRoles,
  getAllTemplateCategories,
  getAllTemplateTags,
} from "./graphql/actions/query";
import { TemplateTags } from "./TemplateTags";
import { AiCategories } from "./AiCategories";
import { ChatBots } from "./ChatBots";
import { TemplateCategories } from "./TemplateCategories";
import { FixedInput } from "./FixedInput";

export const Home = async function Home() {
  const tags = await getAllTemplateTags();

  const aiCategories = await getAiCategories();

  const roles = await getAllRoles();

  const templateCategories = await getAllTemplateCategories();

  return (
    <main className="flex size-full flex-col items-center bg-bg-lite pb-[80px] dark:bg-bg-dark">
      <div className="flex grow flex-col items-center md:w-full md:items-baseline lg:max-w-936 xl:max-w-1216">
        <AiCategories aiCategories={aiCategories} />
        <TemplateTags isHomePage tags={tags["template_tags"]} />
        <ChatBots roles={roles["roles"]} />
        <TemplateCategories
          templateCategories={templateCategories.template_categories}
          ishomePage
        />
        <FixedInput />
      </div>
    </main>
  );
};
