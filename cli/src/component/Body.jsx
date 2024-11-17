import React from "react";
import { TiHtml5, TiCss3 } from "react-icons/ti";
import { MdOutlineJavascript } from "react-icons/md";
import {
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandMongodb,
  TbBrandFirebase,
  TbBrandRedux,
  TbBrandCSharp,
  TbBrandMysql,
} from "react-icons/tb";
import {
  FaNode,
  FaReact,
  FaAngular,
  FaBootstrap,
  FaGit,
  FaVuejs,
} from "react-icons/fa6";
import { SiPostgresql } from "react-icons/si";
import { SiPostman } from "react-icons/si";

export default function Body() {
  return (
    <div>
      <section class="bg-gray-50 py-8 antialiased dark:bg-transparent md:py-16">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div class="mb-4 flex items-center justify-between gap-4 md:mb-8">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Skills
            </h2>
          </div>

          <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <a
              href="#"
              class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                HTML <TiHtml5 />
              </span>
            </a>
            <a
              href="#"
              class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                CSS <TiCss3 />
              </span>
            </a>
            <a
              href="#"
              class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                JAVASCRIPT <MdOutlineJavascript />
              </span>
            </a>
            <a
              href="#"
              class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                TYPESCRIPT <TbBrandTypescript />
              </span>
            </a>
            <a
              href="#"
              class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                NODE <FaNode />
              </span>
            </a>
            <a
              href="#"
              class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                REACT <FaReact />
              </span>
            </a>
            <a
              href="#"
              class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                ANGULAR
                <FaAngular />
              </span>
            </a>
            <a
              href="#"
              class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                BOOTSTRAP <FaBootstrap />
              </span>
            </a>
            <a
              href="#"
              class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                TAILWIND
                <TbBrandTailwind />
              </span>
            </a>
            <a
              href="#"
              class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                POSTEGRE
                <SiPostgresql />
              </span>
            </a>
            <a
              href="#"
              class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                MONGODB
                <TbBrandMongodb />
              </span>
            </a>
            <a
              href="#"
              class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                MYSQL
                <TbBrandMysql />
              </span>
            </a>
            <a
              href="#"
              class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                FIREBASE
                <TbBrandFirebase />
              </span>
            </a>
            <a
              href="#"
              class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                POSTMAN
                <SiPostman />
              </span>
            </a>
            <a
              href="#"
              class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                REDUX &amp; TOOLKIT
                <TbBrandRedux />
              </span>
            </a>
            <a
              href="#"
              class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                .NET
                <TbBrandCSharp />
              </span>
            </a>
            <a
              href="#"
              class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                GIT
                <FaGit />
              </span>
            </a>
          </div>
        </div>
      </section>
      <section class="bg-white dark:bg-transparent">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="max-w-screen-md mb-8 lg:mb-16">
            <p class="text-gray-500 sm:text-xl dark:text-gray-400">
              My Junior Full Stack Web Developer roadmap skills and knowledge
            </p>
          </div>

          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div class="flex justify-center items-center mb-4 w-auto h-auto rounded-full bg-primary-100 lg:h-auto lg:w-auto dark:bg-cyan-400">
                <TiHtml5 color="" size={"30px"} />
                <TiCss3 size={"30px"} />
                <TbBrandTailwind size={"30px"} />
                <FaBootstrap size={"30px"} />
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Web-Design</h3>
              <p class="text-gray-500 dark:text-gray-400">
                I have been developing projects in Html, Css, Bootstrap and
                Tailwind for over 3 years.
              </p>
            </div>

            <div>
              <div class="flex justify-center items-center mb-4 w-auto h-auto rounded-full bg-primary-100 lg:h-auto lg:w-auto dark:bg-cyan-400">
                <FaReact size={"30px"} />
                <FaAngular size={"30px"} />
                <FaVuejs size={"30px"} />
                <TbBrandRedux size={"30px"} />
                <TbBrandTypescript size={"30px"} />
                <MdOutlineJavascript size={"30px"} />
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Front-End & Frameworks
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                After learning Javascript and Typescript, I moved on to
                frameworks and have been developing projects with frameworks for
                over 2 years.
              </p>
            </div>

            <div>
              <div class="flex justify-center items-center mb-4 w-auto h-auto rounded-full bg-primary-100 lg:h-auto lg:w-auto dark:bg-cyan-400">
                <TbBrandCSharp size={"30px"} />
                <FaNode size={"30px"} />
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Back-End Frameworks
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                After learning Javascript and C#, I have been learning
                frameworks and developing projects with Node JS for more than 2
                years and with .Net for 1 year.
              </p>
            </div>

            <div>
              <div class="flex justify-center items-center mb-4 w-auto h-auto rounded-full bg-primary-100 lg:h-auto lg:w-auto dark:bg-cyan-400">
                <TbBrandMongodb size={"30px"} />
                <TbBrandFirebase size={"30px"} />
                <TbBrandMysql size={"30px"} />
                <SiPostgresql size={"30px"} />
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Database</h3>
              <p class="text-gray-500 dark:text-gray-400">
                I started with SQL and MySQL and added Firebase and Mongodb to
                my database roadmap because I plan to become a web developer. I
                have been developing projects for over 2 years.
              </p>
            </div>

            <div>
              <div class="flex justify-center items-center mb-4 w-auto h-auto rounded-full bg-primary-100 lg:h-auto lg:w-auto dark:bg-cyan-400">
                <FaGit size={"30px"} />

                <SiPostman size={"25px"} />
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Tools</h3>
              <p class="text-gray-500 dark:text-gray-400">
                Also the tools I use
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
