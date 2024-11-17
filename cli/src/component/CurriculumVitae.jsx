import React from "react";
import PP from "../assets/fixed.jpg";

export default function CurriculumVitae() {
  return (
    <div>
      <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-transparent antialiased">
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    class="mr-4 w-16 h-16 rounded-full object-cover"
                    src={PP}
                    alt="Hasan Can Şahin"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      class="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      Hasan Can Şahin
                    </a>
                    <p class="text-base lead text-gray-500 dark:text-gray-400">
                      Junior Full-Stack Web Developer
                    </p>
                  </div>
                </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                About Me
              </h1>
            </header>
            <p class="lead">
              Hello, I am Hasan Can Şahin, born in Istanbul in 2006. I graduated
              from Nahit Menteşe Vocational High School in the field of
              Information Technologies and I am an IT graduate. I have been
              developing myself in software for almost 4 years, both at school
              and in my other time. I continue to work actively in the
              Full-Stack Web field. I completed my high school internship at the
              Software Office of Istanbul Aydın University. I took a Full-Stack
              role in CRM-style projects. I think I can take a big role in every
              project within the web.
            </p>
            <p></p>
            <figure>
              <img
                src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                alt=""
              />
            </figure>
            <h2>Education</h2>
            <p className="lead">
              Nahit Menteşe Mesleki ve Teknik Anadolu Lisesi High-School
            </p>
            <h2>EXPERIENCE</h2>
            <p className="lead">
              OzzTech Bilgi Güvenligi ve Yazılım Ltd.Şti 5 Months <br />
              Yako Bilgisayar - Teknoloji 5 Months
            </p>
            <h2>LANGUAGES</h2>
            <p className="lead">English {"->"} B1 </p>
          </article>
        </div>
      </main>
    </div>
  );
}
