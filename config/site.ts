export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Olivet Baptist Church",
  description:
    "Our church exists for the glory of God. We seek to glorify Him by loving Him with all of our being, loving others as ourselves, and making disciples of all ages and nations starting right here in Wichita.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "I'm New",
      href: "/im-new",
      routes: [
        {
          title: "When we gather",
          href: "/im-new/when-we-gather",
          description: "View our regularly scheduled events",
        },
        {
          title: "Leadership",
          href: "/im-new/leadership",
          description: "Meet our pastors and staff",
        },
        {
          title: "Mission",
          href: "/im-new/mission",
          description: "Learn about our mission and vision",
        },
        {
          title: "Core Documents",
          href: "/im-new/core-documents",
          description: "View our statement of faith, church covanent, and constitution & bylaws",
        },
      ],
    },
    {
      title: "Connect",
      href: "/connect",
      routes: [
        {
          title: "Membership",
          href: "/connect/membership",
          description: "Learn about becoming a member at Olivet",
        },
        {
          title: "Discipleship Groups",
          href: "/connect/discipleship-groups",
          description: "Learn about and consider joining a discipleship group",
        },
        {
          title: "Classes",
          href: "/connect/classes",
          description: "Learn about our group bible studies",
        },
        {
          title: "Encuentro con Cristo",
          href: "/connect/encuentro-con-cristo",
          description: "Meet our Spanish speaking congregation and learn about their ministry",
        },
      ],
    },
    {
      title: "Resources",
      href: "/resources",
      routes: [
        {
          title: "Sermons / Videos",
          href: "/resources/sermons-videos",
          description: "View past sermons",
        },
        {
          title: "The Gospel",
          href: "/resources/the-gospel",
          description: "Listen to the good news of Jesus Christ",
        },
        {
          title: "Recommended Reading",
          href: "/resources/recommended-reading",
          description: "View our recommended reading list and bi-monthly book club calendar",
        },
        {
          title: "Recommended Listening",
          href: "/resources/recommended-listening",
          description: "Listen to theologically rich songs on our Spotify playlist",
        },
        {
          title: "Calendar",
          href: "/resources/calendar",
          description: "Full schedule of events and activities at Olivet Baptist Church",
        },
      ],
    },
    {
      title: "Give",
      href: "/give",
    },
    {
      title: "Sign Ups",
      href: "http://linktr.ee/olivetwichita",
    },
  ],
  links: {
    linkTree: "http://linktr.ee/olivetwichita",
    social: {
      facebook: "https://www.facebook.com/olivetwichita",
      instagram: "https://www.instagram.com/olivet_wichita/",
      youtube: "https://www.youtube.com/channel/UCwDa6t4nFtheiAUGhLmZHVA",
      spotify: "https://open.spotify.com/playlist/2x22YclwIfScZEI2FOd07Z?si=4a03d6d2e63e4c2f",
    },
  },
  address: {
    full: "3440 W 13th Street N., Wichita, KS 67203",
    street: "3440 West 13th Street North",
    city: "Wichita",
    state: "KS",
    zip: "67203",
  },
  phone: "316-942-2246",
  businessHours: {
    days: "Monday - Thursday",
    hours: "9:00am - 4:00pm",
  },
}
