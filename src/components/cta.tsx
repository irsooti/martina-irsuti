import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Cta = component$(() => {
  return (
    <div class="bg-yellow-400 my-20 md:my-40 xl:my-64 md:rotate-6 max-w-xl m-auto">
      <div class="h-6 w-full bg-yellow-500"></div>
      <div class="py-20 px-3 md:px-10 text-center ">
        <span class="block font-title text-2xl md:text-5xl text-gray-900 antialiased">
          Scheduliamo una{" "}
          <a
            class="underline underline-offset-2 font-bold"
            href="mailto:martina.irsuti98@gmail.com"
          >
            call?
          </a>
        </span>
        <span class="block py-3">
          O prima vuoi vedere <Link class="underline underline-offset-2 font-bold" href="/resume">il mio curriculum?</Link>
        </span>
      </div>
    </div>
  );
});
