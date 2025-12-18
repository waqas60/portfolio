import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-10">
      <main className="flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <div>
            <h1 className="text-5xl/relaxed font-semibold">Muhammad Waqas</h1>
            <p className="w-fit rounded-full border border-dashed border-neutral-400 px-2 py-1 text-sm">
              FullStack Developer
            </p>
            <div className="leading-wider mt-3 max-w-[70%] text-base tracking-wider text-neutral-700 dark:text-neutral-50">
              <p className="w-full">
                Love both <span className="font-bold">Design</span> and
                <span className="font-bold"> Development</span>.
              </p>
              <p className="">
                So, that means I can create beautiful and functional websites.
              </p>
            </div>
          </div>

          <div className="pointer-events-none overflow-hidden rounded-3xl bg-neutral-200 shadow-[0_3px_10px_rgb(0,0,0,0.2)] select-none">
            <Image
              alt=""
              src={"/profile.jpg"}
              width={130}
              height={130}
              className="rounded-3xl p-1"
            />
            {/* <div className="h-0.5 bg-linear-to-l via-cyan-400 to-transparent"/> */}
          </div>
        </div>

        {/* Projects */}
        <Projects />

        {/* Experience */}
        <Experience />
      </main>
    </div>
  );
}
