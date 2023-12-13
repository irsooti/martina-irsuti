import { component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { render } from "datocms-structured-text-to-html-string";
import { Company } from "~/components/experience/company";
import { Experience } from "~/components/experience/experience";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

const QUERY = `
{
  allCompanies(filter:{_status: {eq:published}}) {
    id
    companyName
    experiences {
      id
      start
      end
      title
      shortDescription {
        value,
      }
    }
    _status
    _firstPublishedAt
  }
}`;

type Company = {
  id: string;
  companyName: string;
  experiences: Experience[];
  _status: string;
  _firstPublishedAt: string;
};

type Experience = {
  id: string;
  start: string;
  end: string | null;
  title: string;
  shortDescription: {
    value: any;
  };
};

type Data = {
  allCompanies: Company[];
};

const convertToLocaleDate = (date: string) => {
  return new Date(date).toLocaleDateString("it-IT");
};

export const useCms = routeLoader$(async (requestEvent) => {
  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${requestEvent.env.get('DATO_TOKEN')}`,
    },
    body: JSON.stringify({ query: QUERY }),
  });

  const { data }: { data: Data } = await response.json();

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  return data.allCompanies || [];
});

export default component$(() => {
  const { value } = useCms();

  return (
    <div class="max-w-screen-lg m-auto px-2 md:px-10 min-h-screen pb-32">
      <h1 class="py-16 text-3xl md:text-4xl xl:text-6xl font-extrabold text-gray-800">
        Resume
      </h1>
      {value.map((company) => {
        return (
          <Company key={company.id} name={company.companyName}>
            <div class="divide-y-2">
              {company.experiences.map((experience) => {
                return (
                  <Experience
                    key={experience.id}
                    datespan={`${convertToLocaleDate(experience.start)} - ${
                      experience.end
                        ? convertToLocaleDate(experience.end)
                        : "Presente"
                    }`}
                    role={experience.title}
                  >
                    <div
                      dangerouslySetInnerHTML={
                        render(experience.shortDescription.value) || ""
                      }
                    />
                  </Experience>
                );
              })}
               {company.experiences.map((experience) => {
                return (
                  <Experience
                    key={experience.id}
                    datespan={`${convertToLocaleDate(experience.start)} - ${
                      experience.end
                        ? convertToLocaleDate(experience.end)
                        : "Presente"
                    }`}
                    role={experience.title}
                  >
                    <div
                      dangerouslySetInnerHTML={
                        render(experience.shortDescription.value) || ""
                      }
                    />
                  </Experience>
                );
              })}
            </div>
          </Company>
          // <div key={company.id}>
          //   <h1>{company.companyName}</h1>
          //   {company.experiences.map((experience) => {
          //     return (
          //       <div key={experience.id}>
          //         <h2>{experience.title}</h2>
          //         <div
          //           dangerouslySetInnerHTML={
          //             render(experience.shortDescription.value) || ""
          //           }
          //         />
          //       </div>
          //     );
          //   })}
          // </div>
        );
      })}
    </div>
  );
});
