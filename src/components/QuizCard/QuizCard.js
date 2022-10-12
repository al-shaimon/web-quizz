import React from 'react';
import { Link } from 'react-router-dom';

const QuizCard = ({ course }) => {
  const { id, logo, name, total } = course;
  return (
    <div className="my-16 mr-0">
      <div className="rounded-md shadow-md lg:w-72 sm:w-full dark:bg-gray-900 bg-green-50 dark:text-slate-500">
        <img
          src={logo}
          alt=""
          className="object-cover border object-center w-full h-72 bg-slate-500  dark:bg-gray-500"
        />
        <div className="p-3">
          <h1 className="lg:text-3xl text-bold my-2 "> Topics: {name} </h1>{' '}
          <div className="flex items-center justify-between"> </div>{' '}
          <div className="flex flex-wrap items-center pt-3 pb-1">
            <div className="flex items-center space-x-2"></div>{' '}
          </div>{' '}
          <div className="space-y-3">
            <div className="flex justify-between pt-4">
              <h2 className="text-xl"> Total Quizzes: {total} </h2>{' '}
              <Link
                to={`/quiz${id}`}
                type="button"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-red-800 shadow-lg shadow-white-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                {' '}
                Start Quiz{' '}
              </Link>
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
};

export default QuizCard;
