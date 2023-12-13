import { component$ } from "@builder.io/qwik";
import classes from "./skill.module.css";

export const Skill = component$(() => {
  return (
    <div class="px-2 md:px-10 text-center md:text-left">
      <h2 class={`${classes.title} max-w-5xl py-5 text-gray-900`}>
        La mia skill principale è{" "}
        <span
          class={`inline-block font-extrabold relative ${classes.hardskill}`}
        >
          l'empatia.
        </span>
      </h2>
      <div>
        <ul class="md:list-disc list-inside text-2xl md:text-4xl text-gray-500 ">
          <li>Organizzo</li>
          <li>Pianifico</li>
          <li>Gestisco i tempi</li>
          <li>Costruisco relazioni</li>
        </ul>
      </div>
    </div>
  );
});
