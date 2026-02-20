import Image from "next/image";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";
import { PROJECTS, SHOWCASE_CATEGORIES } from "@/constants/showcase";

export default function ShowcasePage() {
  return (
    <div className="container py-10">
      <div className="text-center">
        <h2 className="inline-flex flex-col items-start bg-linear-to-r from-[#2A2833] via-[#8673F9] to-[#CA89FD] bg-clip-text font-libre-caslon-text font-medium text-4xl text-transparent 2xl:text-7xl">
          <span>Some Of</span>
          <span className="pl-[1.5em]">Our Works</span>
        </h2>
      </div>
      <section className="mt-10">
        <Tabs defaultValue="all" className="gap-5">
          <TabsList className="flex w-full">
            <TabsTab value="all">All</TabsTab>
            {SHOWCASE_CATEGORIES.map((category) => (
              <TabsTab key={category} value={category}>
                {category}
              </TabsTab>
            ))}
          </TabsList>
          <TabsPanel value="all" keepMounted>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((project) => (
                <div
                  key={project.title}
                  className="overflow-hidden rounded-2xl border bg-white p-3 shadow-lg"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={500}
                    className="w-full rounded-md border"
                  />
                  <div className="p-2">
                    <h3 className="mb-2 font-bold text-xl">{project.title}</h3>
                    <p className="mb-4 text-gray-600">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-gray-200 px-2 py-1 text-gray-700 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsPanel>
          {SHOWCASE_CATEGORIES.map((category) => (
            <TabsPanel key={category} value={category} keepMounted>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.filter(
                  (project) => project.category === category,
                ).map((project) => (
                  <div
                    key={project.title}
                    className="overflow-hidden rounded-2xl border bg-white p-3 shadow-lg"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={500}
                      className="w-full rounded-md border"
                    />
                    <div className="p-2">
                      <h3 className="mb-2 font-bold text-xl">
                        {project.title}
                      </h3>
                      <p className="mb-4 text-gray-600">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded bg-gray-200 px-2 py-1 text-gray-700 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsPanel>
          ))}
        </Tabs>
      </section>
    </div>
  );
}
