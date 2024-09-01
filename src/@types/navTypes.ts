export enum NavigationLink {
  Home = "/",
  Network = "/network",
  Events = "/events",
  Profile = "/profile",
}

export enum Navigation {
  Home = "Home",
  Network = "Network",
  Events = "Events",
  Profile = "Profile",
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
