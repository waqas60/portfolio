import Image from "next/image";

export type ExperienceCardProps = {
  imageUrl: string;
  role: string;
  company: string;
  duration: string;
};

export default function ExperienceCard({
  imageUrl,
  role,
  company,
  duration,
}: ExperienceCardProps) {
  return (
    <div>
      <div className="flex rounded-xl border border-neutral-300 p-4 transition-transform duration-300 hover:scale-3d hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_4px_0px_1px_rgba(25,28,33,0.08)] dark:border dark:border-neutral-800">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="rounded-full">
              <Image src={imageUrl} alt={company} width={50} height={50} />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-xl text-neutral-800 dark:text-neutral-50">
                {role}
              </h2>
              <p className="text-md font-medium text-neutral-600 dark:text-neutral-50">
                {company}
              </p>
            </div>
          </div>

          <div>
            <p className="rounded-full border border-neutral-300 bg-neutral-100 p-2 text-xs  dark:text-neutral-950 dark:bg-neutral-50">
              {duration}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
