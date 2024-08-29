export enum NavigationLink {
  Home = "/",
  Network = "/network",
  Events = "/events",
}

export enum Navigation {
  Home = "Home",
  Network = "Network",
  Events = "Events",
}

export enum Visibility {
  Public = "Public",
  Members = "Members",
  Followers = "Followers",
}

export const visibilityDescriptions: Record<Visibility, string> = {
  [Visibility.Public]: "Show to everyone on the web",
  [Visibility.Members]: "Show to Platform only users",
  [Visibility.Followers]: "Show to your followers only",
};
