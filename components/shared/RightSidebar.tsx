import React from "react";
import Link from "next/link";
import Image from "next/image";
const hotQuestions = [
  {
    _id: 1,
    title: "How can i use DevFlow?",
  },
  {
    _id: 2,
    title: "What is mongoose?",
  },
  {
    _id: 3,
    title: "NextJS roadmap?",
  },
  {
    _id: 4,
    title: "DSA and Placement?",
  },
  {
    _id: 5,
    title: "Develpment android or web?",
  },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div className="">
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/&{question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
      <h3 className="h3-bold text-dark200_light900">Populer Tags</h3>
      </div>
    </section>
  );
};

export default RightSidebar;
