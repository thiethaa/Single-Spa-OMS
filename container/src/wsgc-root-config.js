import {
  registerApplication,
  start
} from "single-spa";


registerApplication({
  name: "@wsgc/Navbar",
  app: () =>
    System.import("@wsgc/Navbar"),
  activeWhen:(location) => location.pathname === "" || 
  location.pathname === "/"|| 
  location.pathname.startsWith('/home')
});

registerApplication({
  name: "@wsgc/Orders",
  app: () =>
    System.import("@wsgc/Orders"),
  activeWhen: (location) => location.pathname === '/home/orders',
});

registerApplication({
  name: "@wsgc/CreateOrder",
  app: () =>
    System.import("@wsgc/CreateOrder"),
  activeWhen: (location) => location.pathname === '/home/create-order',
});

registerApplication({
  name: "@wsgc/Store",
  app: () =>
    System.import("@wsgc/Store"),
  activeWhen: (location) => location.pathname === '/home/store',
});

registerApplication({
  name: "@wsgc/items",
  app: () =>
    System.import("@wsgc/items"),
  activeWhen: (location) => location.pathname === '/home/items',
});

registerApplication({
  name: "@wsgc/rewards",
  app: () =>
    System.import("@wsgc/rewards"),
  activeWhen: (location) => location.pathname === '/home/rewards',
});

registerApplication({
  name: "@wsgc/admin",
  app: () =>
    System.import("@wsgc/admin"),
  activeWhen: (location) => location.pathname === '/home/admin',
});

registerApplication({
  name: "@wsgc/concierge",
  app: () =>
    System.import("@wsgc/concierge"),
  activeWhen: (location) => location.pathname === '/home/concierge',
});

registerApplication({
  name: "@wsgc/omni",
  app: () =>
    System.import("@wsgc/omni"),
  activeWhen: (location) => location.pathname === '/home/omni',
});

registerApplication({
  name: "@wsgc/shipment",
  app: () =>
    System.import("@wsgc/shipment"),
  activeWhen: (location) => location.pathname === '/home/shipment',
});

registerApplication({
  name: "@wsgc/mass-upload",
  app: () =>
    System.import("@wsgc/mass-upload"),
  activeWhen: (location) => location.pathname === '/home/mass-upload',
});

registerApplication({
  name: "@wsgc/login",
  app: () =>
    System.import("@wsgc/login"),
  activeWhen: (location) => location.pathname === '/login',
});

registerApplication({
  name: "angular",
  app: () =>
    System.import("angular"),
  activeWhen: (location) => location.pathname === '/home/angular',
});

start({
  urlRerouteOnly: true,
});