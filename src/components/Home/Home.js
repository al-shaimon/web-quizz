import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import QuizCard from '../QuizCard/QuizCard';
import { CartData } from '../Root/Root';

const Home = () => {
  const quiz = useContext(CartData);

  return (
    <div>
      <div className=" flex flex-col items-center  py-16 pb-24 text-center lg:pb-56 md:py-32 md:px-10 lg:px-2 text-gray-900">
        <h1 className="lg:text-5xl font-bold leading-none text-6xl xl:max-w-6xl text-gray-800">
        Assessment, instruction, and practice that motivate every student to mastery.
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
          
        </p>
        <div className="flex flex-wrap justify-center">
          <Link to="/quiz">
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded-md text-gray-900 hover:bg-purple-900 text-white text-bold bg-green-800"
            >
              Start Quiz
            </button>
          </Link>
          <Link to="/about">
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg border rounded-md hover:bg-purple-300 bg-purple-200 text-gray-900"
            >
              Learn more
            </button>
          </Link>
        </div>
        <h2 className="text-2xl mt-4">
          {' '}
          <span className=" text-3xl font-bold ">Used by 50 million+ people</span> around the world
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:ml-8 lg:mr-8 gap-6  ">
          {quiz.data.map((course) => (
            <QuizCard course={course} key={course.id}></QuizCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
