import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Filter from "@/components/shared/Filter";
import Link from "next/link";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";

const questions = [
  {
    _id: "1",
    title: "How to use React Query with Next.js?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Next.js" },
    ],
    author: {
      _id: "1",
      name: "Ashutosh Kumar",
      picture: "ashu.jpg",
    },
    upvotes: 1800,
    views: 2000000,
    answers: [],
    createdAt: new Date("2024-06-12T05:30:00.000Z"),
  },
  {
    _id: "2",
    title: "How to center a div in CSS?",
    tags: [
      { _id: "3", name: "CSS" },
      { _id: "2", name: "Next.js" },
    ],
    author: {
      _id: "1",
      name: "Ashutosh Kumar",
      picture: "ashu.jpg",
    },
    upvotes: 5,
    views: 50,
    answers: [],
    createdAt: new Date("2024-06-12T05:30:00.000Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There is no question to show"
            description="Be the first to break the silence! Ask Question and kickstart the discussion. Our Query could be the next big thing others learn from. Get Involved!"
            link="/ask-question"
            linkTitle="Ask a question"
          />
        )}
      </div>
    </>
  );
}
