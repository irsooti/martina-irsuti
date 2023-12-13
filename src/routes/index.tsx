import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Cta } from "~/components/cta";
import { Hero } from "~/components/hero";
import { Skill } from "~/components/skill";

export default component$(() => {
  return (
    <div class="max-w-screen-lg m-auto px-2 md:px-10">
      <Hero />
      <Skill />
      <Cta />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Martina Irsuti",
  meta: [
    {
      name: "description",
      content: "Il sito di Martina Irsuti, project manager",
    },
  ],
};
