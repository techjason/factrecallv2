import { siteConfig } from "@/lib/siteConfig";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

const sections = [
  {
    title: "Biology",
    links: [
      { name: "AQA", href: "#" },
      { name: "Edexcel", href: "#" },
      { name: "OCR", href: "#" },
      { name: "WJEC", href: "#" },
      { name: "CAIE", href: "#" },
    ],
  },
  {
    title: "Chemistry",
    links: [
      { name: "AQA", href: "#" },
      { name: "Edexcel", href: "#" },
      { name: "OCR", href: "#" },
      { name: "WJEC", href: "#" },
      { name: "CAIE", href: "#" },
    ],
  },
  {
    title: "Physics",
    links: [
      { name: "AQA", href: "#" },
      { name: "Edexcel", href: "#" },
      { name: "OCR", href: "#" },
      { name: "WJEC", href: "#" },
      { name: "CAIE", href: "#" },
    ],
  },
];

const Footer7 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <footer>
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <span className="flex items-center justify-center gap-4 lg:justify-start">
                  {/* <img
                    src="https://www.shadcnblocks.com/images/block/block-1.svg"
                    alt="logo"
                    className="h-11"
                  /> */}
                  <p className="text-2xl font-semibold">{siteConfig.name}</p>
                </span>
                <p className="mt-6 text-sm text-muted-foreground">
                  {siteConfig.description}
                </p>
              </div>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <InstagramLogoIcon className="size-6" />
                  </a>
                </li>
                {/* <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaFacebook className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaTwitter className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaLinkedin className="size-6" />
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-6 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-6 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>
              © {new Date().getFullYear()} factrecall.com. All rights reserved.
            </p>
            <ul className="flex justify-center gap-4 lg:justify-start">
              <li className="hover:text-primary">
                <a href="#"> Terms and Conditions</a>
              </li>
              <li className="hover:text-primary">
                <a href="#"> Privacy Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer7;
