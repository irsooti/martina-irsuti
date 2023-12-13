import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navbar = component$(() => {
  return (
    <div class="max-w-screen-xl m-auto">
      <nav class="flex px-3 md:px-10">
        <div class="py-3">
          <Link href="/" class="block font-title font-bold text-3xl text-gray-800">
            Martina Irsuti
          </Link>
        </div>
      </nav>
    </div>
  );
});
