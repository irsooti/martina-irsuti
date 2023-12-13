import { Slot, component$ } from "@builder.io/qwik";

type CompanyProps = {
  name: string;
};

export const Company = component$((props: CompanyProps) => {
  return (
    <article class="border border-gray-900 px-3 md:px-10 py-5 md:py-10">
      <h3 class="text-3xl text-gray-600 font-bold">{props.name}</h3>
      <div class="py-3">
        <Slot />
      </div>
    </article>
  );
});
