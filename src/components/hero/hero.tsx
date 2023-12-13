import { component$ } from "@builder.io/qwik";
import image from "../../media/martina-irsuti.jpg";
import classes from "./hero.module.css";
import { LinkedinIcon } from "../linkedinIcon";

export const Hero = component$(() => {
  return (
    <div class="py-28 md:pb-44 md:py-64">
      <header class="flex gap-10 items-center flex-col md:flex-row">
        <img
          src={image}
          width={200}
          height={200}
          alt=""
          class="w-64 h-64 rounded-full"
        />
        <h1 class="leading-none">
          <span class={`block font-title text-gray-900 ${classes.title}`}>
            Martina Irsuti
          </span>
          <span class={`block text-gray-600 ${classes.subtitle}`}>
            Project manager
          </span>
          <a
            class="block py-3"
            href="https://www.linkedin.com/in/martina-irsuti/"
            aria-label="Profilo Linkedin"
          >
            <LinkedinIcon class="w-7 h-7 fill-current" />
          </a>
        </h1>
      </header>
    </div>
  );
});
