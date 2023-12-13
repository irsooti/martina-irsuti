import { Slot, component$ } from "@builder.io/qwik";

type ExperienceProps = {
  role: string;
  datespan: string;
};

export const Experience = component$((props: ExperienceProps) => {
  return (
    <div class="py-2">
      <h4 class="text-2xl text-gray-900 font-bold">{props.role}</h4>
      <Slot />
      <div class="text-sm text-gray-500">{props.datespan}</div>
    </div>
  );
});
