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
      <div className="flex rounded-xl border border-neutral-300 px-6 py-6 transition-transform duration-300 hover:scale-3d hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_4px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="flex justify-between w-full items-center">
          <div className="flex items-center gap-8">
            <div className="rounded-full">
              <Image src={imageUrl} alt={company} width={50} height={50} />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl text-neutral-800">{role}</h2>
              <p className="text-lg text-neutral-600 font-medium">{company}</p>
            </div>
          </div>

          <div>
            <p className="text-neutral-600 border border-neutral-300 p-3 rounded-full text-sm bg-neutral-100 font-semibold">{duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
