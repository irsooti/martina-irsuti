import { component$ } from "@builder.io/qwik";
import { LinkedinIcon } from "./linkedinIcon";

export const Footer = component$(() => {
  return (
    <div class="bg-gray-900 py-32 md:text-left text-center">
      <footer class="max-w-screen-xl m-auto px-2 md:px-10">
        <div class="py-3 leading-none text-gray-300">
          <span class="block font-title font-bold text-3xl ">
            Martina Irsuti
          </span>
          <span class="block">Project Manager</span>
          <span class="inline-block py-3">
            <a
              href="https://www.linkedin.com/in/martina-irsuti/"
              aria-label="Profilo Linkedin"
            >
              <LinkedinIcon class="w-6 h-6 fill-current" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
});
