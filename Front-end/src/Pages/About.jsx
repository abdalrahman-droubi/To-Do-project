import React from "react";
export default function About() {
  return (
    <>
      <div class="bg-gray-800 text-white py-10 text-center">
        <h1 class="text-4xl">About Us Page</h1>
        <br />
        <p class="mt-2">
          We are a passionate team committed to simplifying your task management
          with our innovative website. Our mission is to provide a seamless and
          efficient experience for creating and organizing your to-do list.
          Whether you're a student, professional, or busy individual, our
          website is designed to help you stay organized and prioritize your
          tasks effectively. With user-friendly features and a responsive
          design, our website ensures a seamless experience across various
          devices. Experience the convenience and productivity of our todo list
          website by exploring its responsive nature as you resize your browser
          window.
        </p>
      </div>

      <h2 class="text-center my-8">Our Team</h2>
      <div class="flex flex-wrap -mx-4">
        <div class="w-full sm:w-1/3 px-4 mb-8">
          <div class="bg-white shadow-md rounded-lg p-4 w-80">
            <img src="../../src/Images/avatar.PNG" alt="Hamzeh" class="w-1/2 m-auto" />
            <div class="mt-4">
              <h2 class="text-xl">Hamzeh Dawahreh</h2>
              <p class="text-gray-600">Scrun Master</p>

              <p class="mt-2">hmzhdawahreh@gmail.com</p>
              <button class="bg-black text-white px-4 py-2 mt-4 w-full">
                Contact
              </button>
            </div>
          </div>
        </div>

        <div class="w-full sm:w-1/3 px-4 mb-8">
          <div class="bg-white shadow-md rounded-lg p-4 w-80">
            <img src="../../src/Images/avatar.PNG" alt="Drobi" class="w-1/2 m-auto"/>
            <div class="mt-4">
              <h2 class="text-xl">Abdelrahman Drobi</h2>
              <p class="text-gray-600">Product Owner</p>
              <p class="mt-2">drobi@gmail.com</p>
              <button class="bg-black text-white px-4 py-2 mt-4 w-full">
                Contact
              </button>
            </div>
          </div>
        </div>

        <div class="w-full sm:w-1/3 px-4 mb-8">
          <div class="bg-white shadow-md rounded-lg p-4 w-80">
            <img src="../../src/Images/avatar.PNG" alt="John" class="w-1/2 m-auto" />
            <div class="mt-4">
              <h2 class="text-xl">Amer Khawaldah</h2>
              <p class="text-gray-600">QA</p>
              <p class="mt-2">AmerKhawaldah@example.com</p>
              <button class="bg-black text-white px-4 py-2 mt-4 w-full">
                Contact
              </button>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/3 px-4 mb-8">
          <div class="bg-white shadow-md rounded-lg p-4 w-80">
            <img src="../../src/Images/avatar.PNG" alt="Issa" class="w-1/2 m-auto" />
            <div class="mt-4">
              <h2 class="text-xl">Issa Zeidan</h2>
              <p class="text-gray-600">Team member</p>
              <p class="mt-2">IssaZeidan@example.com</p>
              <button class="bg-black text-white px-4 py-2 mt-4 w-full">
                Contact
              </button>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/3 px-4 mb-8">
          <div class="bg-white shadow-md rounded-lg p-4 w-80">
            <img src="../../src/Images/avatar.PNG" alt="John" class="w-1/2 m-auto" />
            <div class="mt-4">
              <h2 class="text-xl">Dania Aboghoush</h2>
              <p class="text-gray-600">Team member</p>
              <p class="mt-2">DaniaAboghoush@example.com</p>
              <button class="bg-black text-white px-4 py-2 mt-4 w-full">
                Contact
              </button>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/3 px-4 mb-8">
          <div class="bg-white shadow-md rounded-lg p-4 w-80">
            <img src="../../src/Images/avatar.PNG" alt="John" class="w-1/2 m-auto" />
            <div class="mt-4">
              <h2 class="text-xl">Bashar Omoush</h2>
              <p class="text-gray-600">Team member</p>
              <p class="mt-2">BasharOmoush@example.com</p>
              <button class="bg-black text-white px-4 py-2 mt-4 w-full">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}