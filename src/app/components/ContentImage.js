export default function ContentImage({
  title = 'Temporary Title',
  paragraph = 'Temporary Description',
  buttonText = 'Go',
  imageOne = 'https://placehold.co/600x400',
  imageTwo = 'https://placehold.co/600x400',
  link = '/',
}) {
  return (
    <section>
      <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="bg-gray-100 rounded p-8 md:p-12 lg:px-16 lg:py-24">
            <div class="mx-auto max-w-xl text-center">
              <h2 class="text-2xl font-bold text-indigo-700 md:text-3xl">{title}</h2>

              <p class="hidden text-gray-800 sm:mt-4 sm:block">{paragraph}</p>

              <div class="mt-4 md:mt-8">
                <a
                  href={link}
                  class="inline-block rounded border border-indigo-700 bg-indigo-700 px-12 py-3 text-sm font-medium text-gray-100 transition hover:bg-transparent hover:text-indigo-700 focus:outline-none focus:ring focus:ring-indigo-700"
                >
                  {buttonText}
                </a>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img alt="Student" src={imageOne} class="h-40 w-full object-cover sm:h-56 md:h-full" />

            <img alt="Student" src={imageTwo} class="h-40 w-full object-cover sm:h-56 md:h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
