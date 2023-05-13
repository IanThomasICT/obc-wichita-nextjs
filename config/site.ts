export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Olivet Baptist Church",
  description:
    "Our church exists for the glory of God. We seek to glorify Him by loving Him with all of our being, loving others as ourselves, and making disciples of all ages and nations starting right here in Wichita.",
  mainNav: [
    {
      title: "HOME",
      href: "/",
    },
    {
      title: "I'm New",
      href: "/im-new",
    },
    {
      title: "Connect",
      href: "/connect",
    },
    {
      title: "Resources",
      href: "/resources",
    },
    {
      title: "Give",
      href: "/give",
    },
  ],
  links: {
    social: {
      linkTree: "http://linktr.ee/olivetwichita",
      facebook: "https://www.facebook.com/olivetwichita",
      instagram: "https://www.instagram.com/olivet_wichita/",
      youtube: "https://www.youtube.com/channel/UCwDa6t4nFtheiAUGhLmZHVA",
    },
  },
  address: {
    street: "3440 West 13th Street North",
    city: "Wichita",
    state: "KS",
    zip: "67203",
  },
  phone: "316-942-2246",
}
